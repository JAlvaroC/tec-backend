import { Injectable } from '@nestjs/common';
import { CreatePurchaseRequestItemDto } from './dto/create-purchase-request-item.dto';
import { UpdatePurchaseRequestItemDto } from './dto/update-purchase-request-item.dto';

@Injectable()
export class PurchaseRequestItemService {
  create(createPurchaseRequestItemDto: CreatePurchaseRequestItemDto) {
    return 'This action adds a new purchaseRequestItem';
  }

  findAll() {
    return `This action returns all purchaseRequestItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseRequestItem`;
  }

  update(id: number, updatePurchaseRequestItemDto: UpdatePurchaseRequestItemDto) {
    return `This action updates a #${id} purchaseRequestItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseRequestItem`;
  }
}
