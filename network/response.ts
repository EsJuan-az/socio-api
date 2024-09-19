import { Request, Response } from 'express';
export const success = (
  req: Request,
  res: Response,
  body: object,
  status: number = 200
) => {
  return res.status(status).json({
    status,
    body,
    error: false,
  });
};

export const error = (
  req: Request,
  res: Response,
  body: object,
  status: number = 200
) => {
  return res.status(status).json({
    status,
    body,
    error: true,
  });
};

