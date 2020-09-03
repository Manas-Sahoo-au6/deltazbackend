const express = require('express')
const cors = require('cors')
const app = express()
const postRoute = require('./routes/postRoute')
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
require('./db')
app.get('/',(req,res)=>{
    res.json({message:"server is running"})
})



app.use('/post',postRoute)

const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`port is listening at ${port}`)
})