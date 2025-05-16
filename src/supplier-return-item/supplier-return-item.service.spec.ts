import { Test, TestingModule } from '@nestjs/testing';
import { SupplierReturnItemService } from './supplier-return-item.service';

describe('SupplierReturnItemService', () => {
  let service: SupplierReturnItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplierReturnItemService],
    }).compile();

    service = module.get<SupplierReturnItemService>(SupplierReturnItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
