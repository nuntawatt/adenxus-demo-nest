import { Injectable } from '@nestjs/common';
import { CreateCouseDto } from './dto/create-couse.dto';
import { UpdateCouseDto } from './dto/update-couse.dto';

@Injectable()
export class CousesService {
  create(createCouseDto: CreateCouseDto) {
    return 'This action adds a new couse';
  }

  findAll() {
    return `This action returns all couses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} couse`;
  }

  update(id: number, updateCouseDto: UpdateCouseDto) {
    return `This action updates a #${id} couse`;
  }

  remove(id: number) {
    return `This action removes a #${id} couse`;
  }
}
