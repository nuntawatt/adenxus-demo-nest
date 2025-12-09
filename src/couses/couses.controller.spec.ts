import { Test, TestingModule } from '@nestjs/testing';
import { CousesController } from './couses.controller';
import { CousesService } from './couses.service';

describe('CousesController', () => {
  let controller: CousesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CousesController],
      providers: [CousesService],
    }).compile();

    controller = module.get<CousesController>(CousesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
