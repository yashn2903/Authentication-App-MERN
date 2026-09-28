import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connectDB from './Config/mongodb.js'
import userRouter from './Routes/userRoute.js'

const app = express()
const PORT = process.env.PORT || 5000
connectDB()

app.use(express.json())
app.use(cors())
 

app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})