import dotenv from 'dotenv';
dotenv.config();

export const appPort = process.env.APP_PORT || 3000;
export const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';
export const jwtSecret = process.env.JWT_SECRET

export default {
    appPort,
    mongoURI,
    jwtSecret
}