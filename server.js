import express from 'express'
import userRoutes from './src/routes/user.routes.js'
import productRoutes from './src/routes/products.routes.js'

const app = express()
const PORT = 3000

app.use('/products', productRoutes)
app.use('/user', userRoutes)



app.listen(PORT,() => {
    console.log(`servidor escuchado en el puerto ${PORT}`)
})

