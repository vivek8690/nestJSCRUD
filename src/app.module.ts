import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_DATABASE || 'mongodb://localhost:27017/books'),
    UsersModule,
    AuthModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
