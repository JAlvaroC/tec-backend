import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from "./products/entitities/product.entity";
import { ProvidersModule } from './providers/providers.module';
import { Provider } from "./providers/entities/provider.entity";
import { CategoriesModule } from './categories/categories.module';
import { Category } from "./categories/entities/category.entity";
import { InventoriesModule } from './inventories/inventories.module';
import { Inventory } from "./inventories/entities/inventory.entity";
import { PurchaseRequestModule } from './purchase-request/purchase-request.module';
import { PurchaseRequestItemModule } from './purchase-request-item/purchase-request-item.module';
import { PurchaseRequest } from "./purchase-request/entities/purchase-request.entity";
import { PurchaseRequestItem } from "./purchase-request-item/entities/purchase-request-item.entity";
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { PurchaseOrderItemModule } from './purchase-order-item/purchase-order-item.module';
import { SupplierReturnModule } from './supplier-return/supplier-return.module';
import { SupplierReturnItemModule } from './supplier-return-item/supplier-return-item.module';
import { PurchaseOrder } from "./purchase-order/entities/purchase-order.entity";
import { PurchaseOrderItem } from "./purchase-order-item/entities/purchase-order-item.entity";
import { SupplierReturnItem } from "./supplier-return-item/entities/supplier-return-item.entity";
import { SupplierReturn } from "./supplier-return/entities/supplier-return.entity";
import { UsersModule } from './users/users.module';
import { SeedModule } from "./seed/seed.module";

@Module({
  imports: [
    ProvidersModule,
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'tec_db',
      entities: [Product,Provider,Category,Inventory,PurchaseRequest,PurchaseRequestItem,PurchaseOrder,PurchaseOrderItem,SupplierReturn,SupplierReturnItem],
      synchronize: true,
    }),
    CategoriesModule,
    InventoriesModule,
    PurchaseRequestModule,
    PurchaseRequestItemModule,
    PurchaseOrderModule,
    PurchaseOrderItemModule,
    SupplierReturnModule,
    SupplierReturnItemModule,
    UsersModule,
    SeedModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
