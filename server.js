import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import userRoutes from './src/routes/user.routes.js'
import productRoutes from './src/routes/products.routes.js'


const app = express()
const PORT =  process.env.PORT  || 3000

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
})
app.use(cors())
mongoose.connect(process.env.MONGO_URI+"brightbooks")
app.use('/products', productRoutes)
app.use('/user', userRoutes)

app.listen(PORT,() => {
    console.log(`servidor escuchado en el puerto ${PORT}`)
})