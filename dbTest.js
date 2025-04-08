import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log('✅ Conected to MongoDB Atlas');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('❌ Error to conect to MongoDB:', err);
  });
