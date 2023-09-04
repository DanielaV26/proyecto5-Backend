import express from 'express'
import {obtenerProductos} from '../controllers/product.controllers.js'

const  productRoutes = express.Router()

productRoutes.get('/', obtenerProductos)

export default productRoutes