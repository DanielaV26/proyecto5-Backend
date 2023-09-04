import express from 'express'
import {obtenerUsuarios} from '../controllers/user.controllers.js' 

const userRoutes = express.Router()

/* userRoutes.post('/register')
userRoutes.post('/login') */

userRoutes.get('/', obtenerUsuarios)

export default userRoutes