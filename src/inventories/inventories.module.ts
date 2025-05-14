import { Module } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { InventoriesController } from './inventories.controller';
import { Inventory } from "./entities/inventory.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/products/entitities/product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Inventory,Product])],
  controllers: [InventoriesController],
  providers: [InventoriesService],
})
export class InventoriesModule {}
