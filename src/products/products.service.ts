import { Injectable } from '@nestjs/common';
import { Product } from './entitities/product.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PaginationDTO } from '../common/dtos/pagination.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productoRepository: Repository<Product>, // Inject the repository for database operations
  ){}
  private productos: Product[] = [];
  private idCounter = 1; // Counter to generate unique IDs

  async create(dto: CreateProductoDto):Promise< Product> {
    const nuevo = this.productoRepository.create(dto);
    return this.productoRepository.save(nuevo);
  }

  async findAll(paginationDTO:PaginationDTO): Promise<Product[]> {
    const { limit, offset } = paginationDTO;
    return this.productoRepository.find({
      take:limit,
      skip:offset,
    });
  }
}
