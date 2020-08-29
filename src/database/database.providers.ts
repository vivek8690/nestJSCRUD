import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb+srv://vivek_sales:joey@quark@cluster0.7oiq4.mongodb.net/books?authSource=admin&replicaSet=atlas-8lvchi-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }),
  },
];