import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseRequestItemService } from './purchase-request-item.service';
import { CreatePurchaseRequestItemDto } from './dto/create-purchase-request-item.dto';
import { UpdatePurchaseRequestItemDto } from './dto/update-purchase-request-item.dto';

@Controller('purchase-request-item')
export class PurchaseRequestItemController {
  constructor(private readonly purchaseRequestItemService: PurchaseRequestItemService) {}

  @Post()
  create(@Body() createPurchaseRequestItemDto: CreatePurchaseRequestItemDto) {
    return this.purchaseRequestItemService.create(createPurchaseRequestItemDto);
  }

  @Get()
  findAll() {
    return this.purchaseRequestItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseRequestItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseRequestItemDto: UpdatePurchaseRequestItemDto) {
    return this.purchaseRequestItemService.update(+id, updatePurchaseRequestItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseRequestItemService.remove(+id);
  }
}
