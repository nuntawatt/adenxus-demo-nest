import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({
    description: 'Product unique identifier',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Product name',
    example: 'Laptop',
  })
  name: string;

  @ApiProperty({
    description: 'Product description',
    example: 'High-performance laptop for professionals',
  })
  description: string;

  @ApiProperty({
    description: 'Product price',
    example: 999.99,
  })
  price: number;

  @ApiProperty({
    description: 'Product stock quantity',
    example: 50,
  })
  stock: number;

  @ApiProperty({
    description: 'Product category',
    example: 'Electronics',
  })
  category: string;

  @ApiProperty({
    description: 'Product rating (1-5)',
    example: 4.5,
  })
  rating: number;

  @ApiProperty({
    description: 'Product creation date',
    example: '2023-12-08T14:26:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Product last update date',
    example: '2023-12-08T14:26:00.000Z',
  })
  updatedAt: Date;
}
