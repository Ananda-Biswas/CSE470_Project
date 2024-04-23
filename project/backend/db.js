const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ananda:1234567890@cluster0.dptnpyz.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    throw error;
  }
};

module.exports = connectToMongoDB;
