import { Test, TestingModule } from '@nestjs/testing';
import { CousesService } from './couses.service';

describe('CousesService', () => {
  let service: CousesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CousesService],
    }).compile();

    service = module.get<CousesService>(CousesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
