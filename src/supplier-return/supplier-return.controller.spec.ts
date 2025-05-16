import { Test, TestingModule } from '@nestjs/testing';
import { SupplierReturnController } from './supplier-return.controller';
import { SupplierReturnService } from './supplier-return.service';

describe('SupplierReturnController', () => {
  let controller: SupplierReturnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplierReturnController],
      providers: [SupplierReturnService],
    }).compile();

    controller = module.get<SupplierReturnController>(SupplierReturnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
