import prismaDB from '../../config/prisma.config.js';

const findAll = async () => {
  try {
    return await prismaDB.user.findMany();
  } catch (error) {
    throw new Error(error);
  }
};

const findById = async (id) => {
  try {
    return await prismaDB.user.findUnique({
      where: {
        id,
      },
    });
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

const update = async (id, data) => {
  try {
    const { name, email, document } = data;
    return await prismaDB.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        document,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

const remove = async (id) => {
  try {
    return await prismaDB.user.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const UserRepository = {
  findAll,
  findById,
  findByEmail,
  update,
  remove,
};
