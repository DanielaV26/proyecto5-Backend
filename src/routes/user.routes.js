import express from 'express'
import {obtenerUsuarios, crearUsuario, loginUsuario} from '../controllers/user.controllers.js' 

const userRoutes = express.Router()

/* userRoutes.post('/register')
userRoutes.post('/login') */

userRoutes.get('/', obtenerUsuarios)

//ruta para registrar usuario
userRoutes.post('/create', crearUsuario)
//ruta para iniciar sesión
userRoutes.post('/login', loginUsuario)
//ruta para obtener usuario por id

export default userRoutes