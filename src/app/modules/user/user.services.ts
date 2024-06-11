import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';
import config from '../../config';


//user registration 

const createUserIntoDB = async (payload: TUser) => {
  const isUserExits = await User.findOne({ email: payload.email });
  if (isUserExits) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Already Exists');
  }

  try {
    const userData: Partial<TUser> = payload;

    userData.password = payload.password || (config.DEFAULT_PASSWORD as string);

    const newUser = await User.create(userData);

    if (!newUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create new user');
    }
    return newUser;
  } catch (err) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
  }
};


//get all user data

export const userServices = {
  createUserIntoDB,
};
