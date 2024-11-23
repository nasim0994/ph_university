import express from 'express';
import { orderController } from './orderController';
const Router = express.Router();

Router.post('/', orderController.createOrder);
Router.get('/revenue', orderController.calculateRevenue);

export const orderRoute = Router;
