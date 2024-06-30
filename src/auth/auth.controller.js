import envoriment from '../env/envoriment.js';
import { AuthService } from './auth.service.js';
import Crypto from 'crypto-js';

const register = async (req, res) => {
  try {
    const { name, email, password, document } = req.body;
    const hashPassword = Crypto.AES.encrypt(
      password,
      process.env.SECRET_KEY,
    ).toString();
    const confirmPassword = Crypto.AES.decrypt(
      hashPassword,
      process.env.SECRET_KEY,
    ).toString(Crypto.enc.Utf8);
    if (!confirmPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const verifiyDocument =
      document.length === 11 || document.length === 14 ? true : false;
    if (!verifiyDocument) {
      return res.status(400).json({ message: 'Invalid document' });
    }
    const newUser = await AuthService.register({
      name,
      email,
      password: hashPassword,
      document,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await AuthService.findUserByEmail(email);
    if (!userExists) {
      return res.status(400).json({ message: 'User not found' });
    }
    const isValidPassword = Crypto.AES.decrypt(
      userExists.password,
      envoriment.secretKey,
    ).toString(Crypto.enc.Utf8);
    console.log(isValidPassword);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const user = await AuthService.login(email, password);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const AuthController = {
  register,
  login,
};
