import { config } from 'dotenv';

config();

export interface EnvVariables {
  ACCESS_TOKEN_SECRET: string;
  PORT: string;
  MAX_FACES: number;
  DB_CONNECTION_STRING: string;
}

export const { ACCESS_TOKEN_SECRET, PORT, MAX_FACES, DB_CONNECTION_STRING } = process.env as unknown as EnvVariables;
