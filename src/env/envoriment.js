import dotenv from 'dotenv';
dotenv.config();

export const appPort = process.env.APP_PORT || 3000;
export const databaseUrl = process.env.DATABASE_URL;
export const jwtSecret = process.env.JWT_SECRET;
export const secretKey = process.env.SECRET_KEY;

export default {
  appPort,
  databaseUrl,
  jwtSecret,
  secretKey,
};
