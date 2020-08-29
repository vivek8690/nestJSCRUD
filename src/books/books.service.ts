import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_MODEL') private readonly bookModel: Model<Book>) { }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdUser = new this.bookModel(createBookDto);
    return createdUser.save();
  }

  async findAll(queryObj, sortObj): Promise<Book[]> {
    return this.bookModel.find(queryObj).sort(sortObj).lean();
  }

  async findOneById(bookId): Promise<Book> {
    return this.bookModel.findById(bookId).lean();
  }

  async findOneAndUpdate(bookId, book): Promise<Book> {
    const bookObj = await this.bookModel.findById(bookId);
    Object.keys(book).map((key) => {
      bookObj[key] = book[key];
    });
    return await bookObj.save();
  }

  async deleteById(bookId): Promise<Book> {
    return this.bookModel.findByIdAndRemove(bookId).lean();
  }
}
