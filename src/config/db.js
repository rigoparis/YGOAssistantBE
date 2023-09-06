import mongoose from 'mongoose';

const url = process.env.MONGODB_URL;

mongoose.connect(url);

mongoose.connection.on('connected', res => {
  console.log('Connected to mongodb')
});

mongoose.connection.on('error', res => {
  console.error('Error connecting to mongodb')
});