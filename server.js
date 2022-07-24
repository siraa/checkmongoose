const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());

const mongourl="mongodb+srv://siraa:siraa123@cluster0.91vfn0t.mongodb.net/?retryWrites=true&w=majority" 


mongoose.connect(mongourl,(err)=>{

    err ? console.log(err) : console.log('database is connected')

})

app.use('/persons',require('./routes/personRoute'))
const port =5000


app.listen(port,(err)=>{
    err ? console.log(err) : console.log('server is running in port 5000')
})