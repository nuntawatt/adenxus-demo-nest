import { PartialType } from '@nestjs/swagger';
import { CreateCouseDto } from './create-couse.dto';

export class UpdateCouseDto extends PartialType(CreateCouseDto) {}
