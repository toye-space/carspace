import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a car name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
  image: {
    type: String,
    default: '🚗',
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  year: {
    type: Number,
  },
  mileage: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent model recompilation error in development
const Car = mongoose.models.Car || mongoose.model('Car', CarSchema);
export default Car;