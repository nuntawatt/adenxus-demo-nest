import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({
    status: 201,
    description: 'Product successfully created',
    type: Product
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Invalid input data'
  })
  create(@Body() createProductDto: CreateProductDto): Product {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'List of all products',
    type: [Product]
  })
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get('category/:category')
  @ApiOperation({ summary: 'Get products by category' })
  @ApiParam({
    name: 'category',
    description: 'Product category',
    type: 'string'
  })
  @ApiResponse({
    status: 200,
    description: 'List of products in the specified category',
    type: [Product]
  })
  findByCategory(@Param('category') category: string): Product[] {
    return this.productsService.findByCategory(category);
  }

  @Get('in-stock')
  @ApiOperation({ summary: 'Get products that are in stock' })
  @ApiResponse({
    status: 200,
    description: 'List of products with stock > 0',
    type: [Product]
  })
  findInStock(): Product[] {
    return this.productsService.findInStock();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by ID' })
  @ApiParam({
    name: 'id',
    description: 'Product ID',
    type: 'number'
  })
  @ApiResponse({
    status: 200,
    description: 'Product found',
    type: Product
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found'
  })
  findOne(@Param('id') id: string): Product {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update product information' })
  @ApiParam({
    name: 'id',
    description: 'Product ID',
    type: 'number'
  })
  @ApiResponse({
    status: 200,
    description: 'Product successfully updated',
    type: Product
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found'
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Invalid input data'
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Product {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete product' })
  @ApiParam({
    name: 'id',
    description: 'Product ID',
    type: 'number'
  })
  @ApiResponse({
    status: 204,
    description: 'Product successfully deleted'
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found'
  })
  remove(@Param('id') id: string): void {
    this.productsService.remove(+id);
  }
}
