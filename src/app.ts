process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const APP_ENV = (process.env.APP_ENV = process.env.APP_ENV || 'development');

import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { PORT } from './config';
import { errorHandler, logErrors } from './middleware';

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: `Dealership NFC API is running in: ${APP_ENV} mode` });
});

//Routes

//Error handle middleware
app.use(logErrors);
app.use(errorHandler);

//Listening
const port = PORT || 8000;

app.listen(port, () => {
  console.log(`Dealership NFC API is running in: ${APP_ENV} mode`);
});
