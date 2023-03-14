import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors"


const app = express();
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// import Routes
import postsRoutes from "./Routes/posts.js"
import userRouter from "./Routes/user.js"


//usage of routes
app.use('/posts',postsRoutes)
app.use('/user',userRouter)

//routes

app.get('/',(req,res)=>{
    res.send('server created')
})



dotenv.config()

//connect to db

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`))).
    catch((error) => { console.log(error); })

