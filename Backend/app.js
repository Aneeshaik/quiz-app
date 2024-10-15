const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')
const mongoose = require('mongoose')
const mockData = require('./src/Data/mockData')
const PORT = process.env.PORT || 5000
const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send('Backend rendered')
})

app.get('/mockdata', (req, res) => {
    res.json(mockData)
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