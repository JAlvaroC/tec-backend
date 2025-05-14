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
      entities: [Product,Provider,Category,Inventory],
      synchronize: true,
    }),
    CategoriesModule,
    InventoriesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
