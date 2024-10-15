const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const mockData = require('./src/Data/mockData')
const connectDB = require('./db');
const User = require('./src/models/User')
const PORT = process.env.PORT || 5000
const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send('Backend rendered')
})

connectDB();

app.get('/mockdata', (req, res) => {
    res.json(mockData)
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

app.get('/auth/check', authMiddleware, (req, res, next) => {
    res.json({isRegistered: true})
})

app.post('/signup', async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try{
        const existedUser = await User.findOne({email})
        if(existedUser) {
            return res.status(400).json({error: 'Email already exists'})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            firstName,
            lastName,
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

app.get('/mockdata/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = mockData.filter(item => item.id === id); // Find the data with the matching id

    if (data) {
        res.json(data); // If data is found, return it as JSON
    } else {
        res.status(404).json({ error: 'Data not found' }); // If not found, return a 404 error
    }
})

console.log(mockData);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})