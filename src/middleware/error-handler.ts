import { Request, Response } from 'express';

export function errorHandler(error: Error, _req: Request, res: Response): void {
  res.status(400).send({
    message: error.message,
  });
}
