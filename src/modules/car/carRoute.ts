import express from 'express';
const Router = express.Router();
import { carController } from './carController';

Router.post('/', carController.createCar);
Router.get('/', carController.getCars);
Router.get('/:id', carController.getCarById);
Router.delete('/:id', carController.deleteCarById);
Router.put('/:id', carController.updateCar);

export const carRoute = Router;
