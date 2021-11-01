const express = require('express')
const {connectDb} = require('./config/connectDatabase')
const product = require('./routes/product')
const user = require('./routes/user')
const app = express()
const PORT = 6000
connectDb()

//this make sures that all incoming and outgoing data is in JSON format
app.use(express.json())
app.use('/api/v1', product)
app.use('/api/v1', user)
app.use('/api/v1', order)

app.listen(PORT, () => console.log("Server is running on port no:" + PORT))