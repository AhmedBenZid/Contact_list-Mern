const express = require('express');
const config = require('config');
const app = express();
const connectDB = require('./config/connectDb')

app.use(express.json())

const port = 5000

// DB connection

connectDB()

app.use('/api/users', require('./routers/userRouters'));

app.listen(port, (err) => {
    err ? console.log(err) :
        console.log(`Server is running on port ${port}`)
}
)