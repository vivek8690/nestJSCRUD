import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Post()
    async create(@Body() createBookDto: CreateBookDto) {
        await this.booksService.create(createBookDto);
    }

    @Get()
    async findAll(@Query() query): Promise<Book[]> {
        let { sortBy, search } = query;
        search = search || '';
        const sortObj = {};
        sortObj[sortBy] = -1;
        let queryObj = {};
        queryObj['$or'] = [
            { name: { $regex: search, $options: 'i' } },
            { author: { $regex: search, $options: 'i' } },
        ];
        return this.booksService.findAll(queryObj, sortObj);
    }

    @Get(':id')
    async findOne(@Param() bookId): Promise<Book> {
        return this.booksService.findOneById(bookId.id);
    }
}
