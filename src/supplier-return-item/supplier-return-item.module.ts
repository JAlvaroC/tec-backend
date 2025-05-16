import { Module } from '@nestjs/common';
import { SupplierReturnItemService } from './supplier-return-item.service';
import { SupplierReturnItemController } from './supplier-return-item.controller';
import { SupplierReturnItem } from "./entities/supplier-return-item.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([SupplierReturnItem])],
  controllers: [SupplierReturnItemController],
  providers: [SupplierReturnItemService],
})
export class SupplierReturnItemModule {}
