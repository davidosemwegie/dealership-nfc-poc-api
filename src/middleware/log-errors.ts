import { Request, Response, NextFunction } from 'express';

import { logger } from '../utils';

export function logErrors(err: Error, _req: Request, _res: Response, next: NextFunction): void {
  logger.info(err);

  next(err);
}
