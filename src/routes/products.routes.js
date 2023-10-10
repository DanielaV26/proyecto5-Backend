import express from 'express'
import {obtenerFavoritos, obtenerProductoporcategoria, obtenerProductoporid, obtenerProductos} from '../controllers/product.controllers.js'

const  productRoutes = express.Router()

productRoutes.get('/', obtenerProductos)
//ruta para obtener producto por id
productRoutes.get('/product/:id', obtenerProductoporid)


//ruta para obtener producto por categoria
productRoutes.get('/category/:categoria', obtenerProductoporcategoria)
productRoutes.post('/favorites', obtenerFavoritos)

export default productRoutes