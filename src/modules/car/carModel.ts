import { Schema, model } from 'mongoose';
import { Car } from './carInterface';
import validator from 'validator';

const carSchema = new Schema<Car>(
  {
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      trim: true,
      minlength: [2, 'Brand must be at least 2 characters long'],
      validate: {
        validator: (value: string) => /^[a-zA-Z\s]+$/.test(value),
        message: '{VALUE} Brand can only contain letters and spaces',
      },
    },
    model: {
      type: String,
      required: [true, 'Model is required'],
      trim: true,
      minlength: [1, '{VALUE} Model must be at least 1 character long'],
    },
    year: {
      type: Number,
      required: [true, 'Year of manufacture is required'],
      validate: {
        validator: (value: number) => validator.isInt(value.toString()),
        message: '{VALUE} Year must be a valid integer',
      },
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
      validate: {
        validator: (value: number) =>
          validator.isFloat(value.toString(), { min: 0 }),
        message: '{VALUE} Price must be a positive number',
      },
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        message:
          'Category must be one of Sedan, SUV, Truck, Coupe, Convertible',
      },
      validate: {
        validator: (value: string) => /^[a-zA-Z\s]+$/.test(value),
        message: '{VALUE} Category can only contain letters and spaces',
      },
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'],
      validate: {
        validator: (value: number) =>
          validator.isInt(value.toString(), { min: 0 }),
        message: '{VALUE} Quantity must be a non-negative integer',
      },
    },
    inStock: {
      type: Boolean,
      required: [true, 'In-stock status is required'],
      validate: {
        validator: (value: boolean) => typeof value === 'boolean',
        message: '{VALUE} In-stock status must be a boolean value',
      },
    },
  },
  {
    timestamps: true,
  },
);

export const CarModel = model<Car>('car', carSchema);
