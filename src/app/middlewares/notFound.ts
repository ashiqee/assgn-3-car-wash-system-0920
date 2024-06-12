import { Request, Response } from 'express';

import httpStatus from 'http-status';
const notFound = (req: Request, res: Response) => {
  const message = 'API Not Found!!';
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message,
    error: '',
  });
};

export default notFound;