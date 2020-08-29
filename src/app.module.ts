import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_DATABASE || 'mongodb+srv://vivek_sales_handy:joeyquark@cluster0.7oiq4.mongodb.net/books?authSource=admin&replicaSet=atlas-8lvchi-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'),
    UsersModule,
    AuthModule,
    BooksModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
