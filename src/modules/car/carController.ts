import { Request, Response, NextFunction } from 'express';
import { carService } from './carService';
import { Car } from './carInterface';

const createCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: Car = req.body;
    const result = await carService.createCar(data);

    res.status(200).json({
      success: true,
      message: 'car created successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getCars = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchTerm } = req.query;

    const cars = await carService.getAllCars(searchTerm as string);

    res.status(200).json({
      success: true,
      message: 'cars fetched successfully',
      data: cars,
    });
  } catch (error: any) {
    next(error);
  }
};

const getCarById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const result = await carService.getCarById(id);

    res.status(200).json({
      success: true,
      message: 'car fetched successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data: Partial<Car> = req.body;

    const result = await carService.updateCar(id, data);

    res.status(200).json({
      success: true,
      message: 'car updated successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteCarById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const result = await carService.deleteCarById(id);

    res.status(200).json({
      success: true,
      message: 'car deleted successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const carController = {
  createCar,
  getCars,
  getCarById,
  updateCar,
  deleteCarById,
};
