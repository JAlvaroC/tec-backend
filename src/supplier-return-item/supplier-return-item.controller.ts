import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplierReturnItemService } from './supplier-return-item.service';
import { CreateSupplierReturnItemDto } from './dto/create-supplier-return-item.dto';
import { UpdateSupplierReturnItemDto } from './dto/update-supplier-return-item.dto';

@Controller('supplier-return-item')
export class SupplierReturnItemController {
  constructor(private readonly supplierReturnItemService: SupplierReturnItemService) {}

  @Post()
  create(@Body() createSupplierReturnItemDto: CreateSupplierReturnItemDto) {
    return this.supplierReturnItemService.create(createSupplierReturnItemDto);
  }

  @Get()
  findAll() {
    return this.supplierReturnItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierReturnItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplierReturnItemDto: UpdateSupplierReturnItemDto) {
    return this.supplierReturnItemService.update(+id, updateSupplierReturnItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierReturnItemService.remove(+id);
  }
}
