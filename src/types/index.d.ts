import { Response, Request, NextFunction } from 'express';

export type ControllerFunction = (req: Request, res: Response, next: NextFunction) => void;
