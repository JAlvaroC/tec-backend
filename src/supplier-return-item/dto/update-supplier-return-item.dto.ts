import { PartialType } from '@nestjs/swagger';
import { CreateSupplierReturnItemDto } from './create-supplier-return-item.dto';

export class UpdateSupplierReturnItemDto extends PartialType(CreateSupplierReturnItemDto) {}
