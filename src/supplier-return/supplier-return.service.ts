import { Injectable } from '@nestjs/common';
import { CreateSupplierReturnDto } from './dto/create-supplier-return.dto';
import { UpdateSupplierReturnDto } from './dto/update-supplier-return.dto';

@Injectable()
export class SupplierReturnService {
  create(createSupplierReturnDto: CreateSupplierReturnDto) {
    return 'This action adds a new supplierReturn';
  }

  findAll() {
    return `This action returns all supplierReturn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplierReturn`;
  }

  update(id: number, updateSupplierReturnDto: UpdateSupplierReturnDto) {
    return `This action updates a #${id} supplierReturn`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplierReturn`;
  }
}
