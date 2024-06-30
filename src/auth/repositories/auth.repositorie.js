import prismaDB from '../../config/prisma.config.js';

const create = async (user) => {
  try {
    const { name, document, email, password } = user;
    const newUser = await prismaDB.user.create({
      data: {
        name,
        document,
        email,
        password,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

const findByEmail = async (email) => {
  try {
    return await prismaDB.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const AuthRepository = {
  create,
  findByEmail,
};
