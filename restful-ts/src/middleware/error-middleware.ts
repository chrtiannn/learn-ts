import { Response, Request, NextFunction } from 'express';
import { ZodError } from 'zod';

export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    res.status(400).json({ errors: `Validation Error : ${JSON.stringify(error)}` });
  }
};
