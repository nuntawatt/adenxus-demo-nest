import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    description: 'Product name',
    example: 'Laptop',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Product description',
    example: 'High-performance laptop for professionals',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Product price',
    example: 999.99,
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  price?: number;

  @ApiProperty({
    description: 'Product stock quantity',
    example: 50,
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  stock?: number;

  @ApiProperty({
    description: 'Product category',
    example: 'Electronics',
    required: false,
  })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({
    description: 'Product rating (1-5)',
    example: 4.5,
    minimum: 1,
    maximum: 5,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(5)
  rating?: number;
}
