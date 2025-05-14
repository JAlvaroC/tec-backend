import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Inventory } from "./entities/inventory.entity";
import { Product } from "src/products/entitities/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class InventoriesService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepo: Repository<Inventory>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  
  async create(dto: CreateInventoryDto): Promise<Inventory> {
    const product = await this.productRepository.findOneBy({ id: dto.productoId });
  
    if (!product) {
      throw new NotFoundException(`Product with ID ${dto.productoId} not found`);
    }
  
    const inventory = this.inventoryRepo.create({
      almacen: dto.almacen,
      stock_actual: dto.stock_actual,
      stock_minimo: dto.stock_minimo,
      product, // relación con producto
    });
  
    return this.inventoryRepo.save(inventory);
  }
  

  findAll() {
    return `This action returns all inventories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
