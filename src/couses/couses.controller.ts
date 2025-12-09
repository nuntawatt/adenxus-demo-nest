import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CousesService } from './couses.service';
import { CreateCouseDto } from './dto/create-couse.dto';
import { UpdateCouseDto } from './dto/update-couse.dto';

@Controller('couses')
export class CousesController {
  constructor(private readonly cousesService: CousesService) {}

  @Post()
  create(@Body() createCouseDto: CreateCouseDto) {
    return this.cousesService.create(createCouseDto);
  }

  @Get()
  findAll() {
    return this.cousesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cousesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCouseDto: UpdateCouseDto) {
    return this.cousesService.update(+id, updateCouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cousesService.remove(+id);
  }
}
