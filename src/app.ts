import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import router from './routes/intex';
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send(`server is running on port ${config.PORT} 🏃‍♂️‍➡️`);
});

// use Routes
app.use('/api', router);

// all undefined routes
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Api not found!',
  });
});

// global error handler
app.use((err: any, req: Request, res: Response) => {
  if (err) {
    res.status(400).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: { error: err, stack: err.stack },
    });
  }
});

export default app;
