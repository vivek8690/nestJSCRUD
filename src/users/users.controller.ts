import { Body, Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
        await this.usersService.create(createUserDto);
        res.status(HttpStatus.OK).json({
            sucess: true,
            message: 'Record created successfully'
        });
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
