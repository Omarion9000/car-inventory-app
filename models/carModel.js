import mongoose from 'mongoose';

const currentYear = new Date().getFullYear();

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'Car make is required'],
  },
  model: {
    type: String,
    required: [true, 'Car model is required'],
  },
  year: {
    type: Number,
    required: true,
    min: 1980,
    max: currentYear,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  available: {
    type: Boolean,
    default: true,
  }
});

const Car = mongoose.model('Car', carSchema);
export default Car;
