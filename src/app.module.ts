import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot('mongodb://localhost:27017/books'),
    UsersModule,
    AuthModule,
    BooksModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
