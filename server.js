import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './src/routes/user.routes.js'
import productRoutes from './src/routes/products.routes.js'
import cors from 'cors'

mongoose.connect(process.env.MONGO_URI+"brightbooks")

const app = express()
const PORT =  process.env.PORT  || 3000
app.use(cors())
app.use('/products', productRoutes)
app.use('/user', userRoutes)



app.listen(PORT,() => {
    console.log(`servidor escuchado en el puerto ${PORT}`)
})

