import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { DatabaseModule } from '../database/database.module';
import { booksProviders } from './books.providers';
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [
    DatabaseModule,
    AuthModule
  ],
  controllers: [BooksController],
  providers: [BooksService, ...booksProviders]
})
export class BooksModule { }
