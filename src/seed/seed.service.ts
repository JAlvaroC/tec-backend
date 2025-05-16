import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
// import { User } from '../auth/entities/user.entity';
// import { Repository } from 'typeorm/repository/Repository';
import { Repository } from 'typeorm';
import { Product } from "src/products/entitities/product.entity";

@Injectable()
export class SeedService {
  constructor(
    private readonly productsService: ProductsService,
    // @InjectRepository(User)
    // private readonly userRepository: Repository<User>,
  ) {}
  async runSeed() {
    await this.deleteTables();
    // const adminUser = await this.insertUsers();
    // await this.insertNewProduct(adminUser);
    await this.insertNewProduct();

    return 'SEED EXECUTED';
  }
  private async deleteTables() {
    await this.productsService.deleteAllProducts();
    // await this.
    // const queryBuilder = this.userRepository.createQueryBuilder();
    // await queryBuilder.delete().where({}).execute();
    return true;
  }

//   private async insertUsers() {
    // const seedUser = initialData.users;
    // const users: User[] = [];
    // seedUser.forEach((user) => {
    //   users.push(this.userRepository.create(user));
    // });
    // const dbUsers = await this.userRepository.save(seedUser);
    // return dbUsers[0];
//   }

//   private async insertNewProduct(user: User) {
  private async insertNewProduct() {
    this.productsService.deleteAllProducts();
    const products = initialData.products;
    console.log("🚀 ~ insertNewProduct ~ products:", products)
    // const insertPromises = [];
    const insertPromises: Promise<Product>[] = [];
    // const insertPromises = [] as Promise<any>[];


    products.forEach((product) => {
    //   insertPromises.push(this.productsService.create(product, user));
      insertPromises.push(this.productsService.create(product));

    });
    // const results=
    await Promise.all(insertPromises);
    return true;
  }
}
