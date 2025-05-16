import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplierReturnService } from './supplier-return.service';
import { CreateSupplierReturnDto } from './dto/create-supplier-return.dto';
import { UpdateSupplierReturnDto } from './dto/update-supplier-return.dto';

@Controller('supplier-return')
export class SupplierReturnController {
  constructor(private readonly supplierReturnService: SupplierReturnService) {}

  @Post()
  create(@Body() createSupplierReturnDto: CreateSupplierReturnDto) {
    return this.supplierReturnService.create(createSupplierReturnDto);
  }

  @Get()
  findAll() {
    return this.supplierReturnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierReturnService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplierReturnDto: UpdateSupplierReturnDto) {
    return this.supplierReturnService.update(+id, updateSupplierReturnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierReturnService.remove(+id);
  }
}
