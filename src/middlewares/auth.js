import dotenv from  'dotenv'
dotenv.config();
// const { expressjwt: jwt } = require("express-jwt");
import { expressjwt as jwt} from 'express-jwt'
const secret = process.env.JWT_SECRET_KEY;

const getToken = (req) => {
  const { authorization } = req.headers;
  if (authorization) {
    const [type, token] = authorization.split(' ');
    return (type === 'Bearer' || type === 'Token') ? token : null;
  }
  return null;
};

export const auth = jwt({
  secret,
  algorithms: ['HS256'],
  userProperty: 'user',
  getToken,
});
