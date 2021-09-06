import { config } from 'dotenv';

config();

export interface EnvVariables {
  ACCESS_TOKEN_SECRET: string;
  PORT: string;
  MAX_FACES: number;
  DATABASE_URL: string;
}

export const { ACCESS_TOKEN_SECRET, PORT, MAX_FACES, DATABASE_URL } = process.env as unknown as EnvVariables;
