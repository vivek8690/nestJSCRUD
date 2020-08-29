import { Document } from 'mongoose';

export interface Book extends Document {
  readonly name: string;
  readonly author: string;
  readonly published_year : number;
  readonly price: number;
}