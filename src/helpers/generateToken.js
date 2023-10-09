// const jsonwebtoken = require('jsonwebtoken');
import jsonwebtoken from 'jsonwebtoken'
const secret = process.env.JWT_SECRET_KEY;

export const generateToken = (user) => {
  const { _id, name, lastname, email, identification, age, country, region, commune, address, phone } = user;
  return jsonwebtoken.sign(
    { _id, name, lastname, email, identification, age, country, region, commune, address, phone},
    secret,
    { expiresIn: '30d' }
  );
}
