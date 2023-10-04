const jsonwebtoken = require('jsonwebtoken');
const secret = process.env.JWT_SECRET_KEY;

const generateToken = (user) => {
  const { _id, userName, email, isAdmin } = user;
  return jsonwebtoken.sign(
    { _id, userName, email, isAdmin },
    secret,
    { expiresIn: '30d' }
  );
}

module.exports = generateToken;