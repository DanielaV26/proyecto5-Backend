import express from 'express'
import {obtenerUsuarios} from '../controllers/user.controllers.js' 

const userRoutes = express.Router()

/* userRoutes.post('/register')
userRoutes.post('/login') */

userRoutes.get('/', obtenerUsuarios)

//ruta para registrar usuario
//ruta para iniciar sesión
//ruta para obtener usuario por id

export default userRoutes