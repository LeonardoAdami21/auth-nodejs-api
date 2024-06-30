import Crypto from 'crypto-js';
import jwt from 'jsonwebtoken';
import { AuthRepository } from './repositories/auth.repositorie.js';

const register = async (user) => {
  try {
    const userExists = await AuthRepository.findByEmail(user.email);
    if (userExists) {
      throw new Error('User already exists');
    }
    const hashedPassword = Crypto.AES.encrypt(
      user.password,
      process.env.SECRET_KEY,
    ).toString();
    if (!hashedPassword) {
      throw new Error('Error encrypting password');
    }
    const newUser = {
      name: user.name,
      document: user.document,
      email: user.email,
      password: user.password,
    };
    return await AuthRepository.create(newUser);
  } catch (error) {
    throw new Error(error);
  }
};

const login = async (email, password) => {
  try {
    const user = await AuthRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const hashedPassword = Crypto.AES.decrypt(
      user.password,
      process.env.SECRET_KEY,
    ).toString(Crypto.enc.Utf8);
    if (hashedPassword !== password) {
      throw new Error('Invalid password');
    }
    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
    return { access_token: token };
  } catch (error) {
    throw new Error(error);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await AuthRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const AuthService = {
  register,
  login,
  findUserByEmail,
};
