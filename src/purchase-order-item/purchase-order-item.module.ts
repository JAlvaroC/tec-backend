import { Module } from '@nestjs/common';
import { PurchaseOrderItemService } from './purchase-order-item.service';
import { PurchaseOrderItemController } from './purchase-order-item.controller';
import { PurchaseOrderItem } from "./entities/purchase-order-item.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseOrderItem])],
  controllers: [PurchaseOrderItemController],
  providers: [PurchaseOrderItemService],
})
export class PurchaseOrderItemModule {}
