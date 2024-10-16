const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
// const mockData = require('./src/Data/mockData')
const connectDB = require('./db');
const Question = require('./src/models/Question')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const User = require('./src/models/User')
const Result = require('./src/models/Result')
const insertData = require('./src/Data/mockData')
const PORT = process.env.PORT || 5000
const app = express();
dotenv.config();
connectDB();
insertData();

app.use(bodyParser.urlencoded({extended: true}));
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Backend rendered')
})

app.get('/mockdata', async (req, res) => {
    try {
        const mockData = await Question.find();
        if (!mockData) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(mockData);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
})

app.get('/users/:id', async(req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
})

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    // console.log(authHeader);
    if(!authHeader){
        res.status(401).json({error: "Unauthorized"})
    }
    const token = authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(decoded)
        req.user = decoded
        next()
    }
    catch(error){
        res.status(401).json({error: "Invalid token"})
    }
}

app.post('/signin', async(req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({message: "User not found! Sign up now."})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message: "Invalid password"})
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        const userId = user._id
        res.status(201).json({message: "Successfully logged in!", token, userId})
    }
    catch(error){
        res.status(500).json({message: 'Server Error'})
    }
})

app.post('/results', async(req, res) => {
    const { name, category, score } = req.body;
    try{
        const result = new Result({
            name,
            category,
            score
        })
        await result.save()
        res.status(201).json({message: "Successfully added result!"})
    }
    catch(error){
        res.status(500).json({message: "Adding result Failed"})
        console.error(error)
    }
})

app.get('/results', async(req, res) => {
    const results = await Result.find()
    res.json(results)
})

app.get('/auth/check', authMiddleware, (req, res, next) => {
    res.json({isLoggedIn: true})
})

app.post('/signup', async(req, res) => {
    const { name, email, password, userType } = req.body;
    try{
        const existedUser = await User.findOne({email})
        if(existedUser) {
            return res.status(400).json({error: 'Email already exists'})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            userType
        })
        await user.save()
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        const userId = user._id
        res.status(201).json({message: "Successfully Registered!", token, userId})
    }
    catch(error){
        res.status(500).json({message: "Registration Failed"})
        console.error(error)
    }
})

app.get('/mockdata/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await Question.find({ id: id }) // Find the data with the matching id

    if (data) {
        res.json(data); // If data is found, return it as JSON
    } else {
        res.status(404).json({ error: 'Data not found' }); // If not found, return a 404 error
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})