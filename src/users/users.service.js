import { UserRepository } from './repositories/users.repository.js';

const findAll = async () => {
  try {
    return await UserRepository.findAll();
  } catch (error) {
    throw new Error(error);
  }
};

const findById = async (id) => {
  try {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const findByEmail = async (email) => {
  try {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error(error);
  }
};

const updated = async (id, data) => {
  try {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }

    const { name, email, document } = data;
    return await UserRepository.update(id, { name, email, document });
  } catch (error) {
    throw new Error(error);
  }
};

const remove = async (id) => {
  try {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return await UserRepository.remove(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const UserService = {
  findAll,
  findById,
  findByEmail,
  updated,
  remove,
};
