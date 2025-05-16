import { Module } from '@nestjs/common';
import { PurchaseRequestItemService } from './purchase-request-item.service';
import { PurchaseRequestItemController } from './purchase-request-item.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurchaseRequestItem } from "./entities/purchase-request-item.entity";

@Module({
  imports   : [ TypeOrmModule.forFeature([PurchaseRequestItem]) ],	
  controllers: [PurchaseRequestItemController],
  providers: [PurchaseRequestItemService],
})
export class PurchaseRequestItemModule {}
