import { Car } from './carInterface';
import { CarModel } from './carModel';

const createCar = async (data: Car) => {
  const result = await CarModel.create(data);
  return result;
};

const getAllCars = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');

  const query = {
    $or: [
      { category: { $regex: regex } },
      { brand: { $regex: regex } },
      { model: { $regex: regex } },
    ],
  };

  const cars = await CarModel.find(query);
  return cars;
};

const getCarById = async (id: string) => {
  const result = await CarModel.findById(id);
  return result;
};

const updateCar = async (carId: string, updateData: Partial<Car>) => {
  const isExist = await CarModel.findById(carId);

  if (!isExist) {
    throw new Error('Car not found');
  }

  const result = await CarModel.findByIdAndUpdate(
    carId,
    {
      $set: updateData,
      $currentDate: { updatedAt: true },
    },
    { new: true },
  );

  return result;
};

const deleteCarById = async (id: string) => {
  const result = await CarModel.findByIdAndDelete(id);
  return result;
};

export const carService = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCarById,
};
