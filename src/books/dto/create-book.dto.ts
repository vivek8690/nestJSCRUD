import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

export class CreateBookDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly author: string;

    @IsNotEmpty()
    readonly published_year: number;

    @IsNotEmpty()
    readonly price: number;
}