const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001
const { errorHandler } = require('./middleware/errorMiddleware.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/messages', require('./routes/messageRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
