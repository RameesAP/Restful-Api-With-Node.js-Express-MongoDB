const express= require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

const app = express();

// Middleware

//routes

app.get('/',(req,res)=>{
    res.send('server created')
})

app.get('/post',(req,res)=>{
    res.send('we are on post')
})

dotenv.config()

//connect to db

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`))).
    catch((error) => { console.log(error); })

