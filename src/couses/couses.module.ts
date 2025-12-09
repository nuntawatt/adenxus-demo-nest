import { Module } from '@nestjs/common';
import { CousesService } from './couses.service';
import { CousesController } from './couses.controller';

@Module({
  controllers: [CousesController],
  providers: [CousesService],
})
export class CousesModule {}
