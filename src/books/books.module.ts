import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { DatabaseModule } from '../database/database.module';
import { booksProviders } from './books.providers';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [BooksController],
  providers: [BooksService, ...booksProviders]
})
export class BooksModule { }
