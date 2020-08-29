import * as mongoose from 'mongoose';

console.log(process.env.MONGODB_DATABASE);

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb://localhost:27017/books',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }),
  },
];