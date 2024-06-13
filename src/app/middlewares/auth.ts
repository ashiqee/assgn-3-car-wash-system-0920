import { NextFunction, Request, Response } from 'express';
import { TRole } from '../modules/user/user.interface';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';

const auth = (...requiredRoles: TRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;


    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorited');
    }

    const decoded = jwt.verify(
      token as string,
      config.JWT_ACCESS_SECRET as string,
    ) as JwtPayload;

    const { role, userEmail, iat } = decoded;

    const user = await User.isUserExistByEmail(userEmail);
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
      }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }



    req.user = decoded as JwtPayload & {role: string};
    next()
  
  });
};


export default auth;