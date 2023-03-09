const express = require('express')

const app = express();

//routes

app.get('/',(req,res)=>{
    res.send('server created')
})


// serverport
app.listen(5000)