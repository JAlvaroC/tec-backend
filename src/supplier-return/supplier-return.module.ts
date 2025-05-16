import { Module } from '@nestjs/common';
import { SupplierReturnService } from './supplier-return.service';
import { SupplierReturnController } from './supplier-return.controller';
import { SupplierReturn } from "./entities/supplier-return.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([SupplierReturn])],
  controllers: [SupplierReturnController],
  providers: [SupplierReturnService],
})
export class SupplierReturnModule {}
