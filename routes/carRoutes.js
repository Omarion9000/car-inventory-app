import express from 'express';
import Car from '../models/carModel.js';

const router = express.Router();

// CREATE: Add a new car
router.post('/cars', async (req, res) => {
  try {
    const { make, model, year, price, color } = req.body;
    const car = new Car({ make, model, year, price, color });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ: Get all the  cars
router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ: get a car by ID
router.get('/cars/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE: Update a car
router.put('/cars/:id', async (req, res) => {
  try {
    const { make, model, year, price, color } = req.body;
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      { make, model, year, price, color },
      { new: true }
    );
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Delete a car
router.delete('/cars/:id', async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json({ message: 'Car deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
