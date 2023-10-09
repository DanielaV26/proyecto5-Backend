import { User } from '../models/user.models.js'
// const generateToken = require('../helpers/generateToken');
import {generateToken} from '../helpers/generateToken.js'
// const encrypt = require('../helpers/encrypt');
import {encrypt} from '../helpers/encrypt.js'

export const obtenerUsuarios = async (req, res) => {
  res.status(200).json({ message: "Estos son todos los usuarios" });
};

export const crearUsuario = async (req, res) => {
  console.log('estoy en la ruta de crear usuario')
  const usuario = req.body;
  console.log(usuario)
  const emailToLowerCase = usuario.email.toLowerCase();
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!regexPassword.test(usuario.password)) {
    return res
      .status(400)
      .json({
        message:
          "Su contraseña debe tener al menos 8 carácteres y contener una minúscula, una mayúscula y un número",
      });
  }
  const encryptedPassword = encrypt(usuario.password);
  const user = new User({
    ...usuario,
    email: emailToLowerCase,
    password: encryptedPassword,
    commune: usuario.commune[0],
    region: usuario.region[0]
  });
  try {
    const newUser = await user.save();
    const token = generateToken(newUser);
    res.status(201).json({
      message: "Usuario creado con éxito",
      token,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = encrypt(password);
  try {
    const user = await User.findOne({ email, password: encryptedPassword })
    if (user) {
      const token = generateToken(user);
      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        token
      });
    }
    else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }


}

export const editarUsuario = async (req, res) =>{
  const usuario = req.body
  const {id} = req.params
  try { 
    const user = await User.findByIdAndUpdate(id, usuario)
    const token = generateToken(user)
    res.status (200).json({
      message: 'Usuario actualizado correctamente', token
    })
    
  } catch (error) {
    res.status(500).json({
      message:'Algo salio mal',
      error


    })
  }
}