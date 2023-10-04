// const crypto = require('crypto');
import crypto from 'crypto'
const salt = process.env.SALT;

export const encrypt = (password) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
}

