import { Body, Controller, Get, Post, Delete, Param, Query, Put, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Book } from './interfaces/book.interface';

@UseGuards(JwtAuthGuard)
@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Post()
    async create(@Res() res: Response, @Body() createBookDto: CreateBookDto) {
        await this.booksService.create(createBookDto);
        res.status(HttpStatus.OK).json({
            sucess: true,
            message: 'Record created successfully'
        });
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

    @Put(':id')
    async findOneAndUpdate(@Param() bookId, @Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.booksService.findOneAndUpdate(bookId.id, createBookDto);
    }

    @Delete(':id')
    async deleteOne(@Param() bookId): Promise<Book> {
        return this.booksService.deleteById(bookId.id,);
    }
}
