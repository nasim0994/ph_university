import { Request, Response } from 'express';
import mongoose from 'mongoose';
import config from './config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    console.log('database connect success 🚀');

    app.get('/', (req: Request, res: Response) => {
      res.send(`server is running on port ${config.PORT} 🏃‍♂️‍➡️`);
    });

    app.listen(config.PORT, () => {
      console.log(`server is running on port ${config.PORT} 🏃‍♂️‍➡️`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
