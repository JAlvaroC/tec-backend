import { Injectable } from '@nestjs/common';
import { CreateSupplierReturnItemDto } from './dto/create-supplier-return-item.dto';
import { UpdateSupplierReturnItemDto } from './dto/update-supplier-return-item.dto';

@Injectable()
export class SupplierReturnItemService {
  create(createSupplierReturnItemDto: CreateSupplierReturnItemDto) {
    return 'This action adds a new supplierReturnItem';
  }

  findAll() {
    return `This action returns all supplierReturnItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplierReturnItem`;
  }

  update(id: number, updateSupplierReturnItemDto: UpdateSupplierReturnItemDto) {
    return `This action updates a #${id} supplierReturnItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplierReturnItem`;
  }
}
