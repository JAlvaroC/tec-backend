import { Test, TestingModule } from '@nestjs/testing';
import { SupplierReturnItemController } from './supplier-return-item.controller';
import { SupplierReturnItemService } from './supplier-return-item.service';

describe('SupplierReturnItemController', () => {
  let controller: SupplierReturnItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplierReturnItemController],
      providers: [SupplierReturnItemService],
    }).compile();

    controller = module.get<SupplierReturnItemController>(SupplierReturnItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
