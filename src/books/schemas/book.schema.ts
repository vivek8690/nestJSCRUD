import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  published_year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});