import * as mongoose from 'mongoose';

console.log(process.env.MONGODB_DATABASE);

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        process.env.MONGODB_DATABASE,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }),
  },
];