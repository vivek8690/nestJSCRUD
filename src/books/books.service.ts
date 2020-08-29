import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_MODEL') private readonly bookModel: Model<Book>) { }

  async create(createCatDto: CreateBookDto): Promise<Book> {
    const createdUser = new this.bookModel(createCatDto);
    return createdUser.save();
  }

  async findAll(queryObj, sortObj): Promise<Book[]> {
    return this.bookModel.find(queryObj).sort(sortObj).lean();
  }

  async findOneById(bookId): Promise<Book> {
    console.log(bookId);
    return this.bookModel.findById(bookId).lean();
  }
}
