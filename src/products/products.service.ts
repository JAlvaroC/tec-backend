import { Injectable } from '@nestjs/common';
import { Product } from './entitities/product.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PaginationDTO } from '../common/dtos/pagination.dto';
import { Category } from "src/categories/entities/category.entity";

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productoRepository: Repository<Product>, // Inject the repository for database operations
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>, // Inject the repository for database operations
  ){}
  private productos: Product[] = [];
  private idCounter = 1; // Counter to generate unique IDs

  async create(dto: CreateProductoDto):Promise< Product> {
    const category = await this.categoryRepository.findOneBy({ id: dto.categoryId });

    if(!category) throw new Error('Category not found');
    const product =this.productoRepository.create({...dto, category});  
    
    return this.productoRepository.save(product);
  }

  async findAll(paginationDTO: PaginationDTO): Promise<Product[]> {
    const { limit, offset } = paginationDTO;
    return this.productoRepository.find({
      take: limit,
      skip: offset,
      relations: ['category'], // 🔥 para que incluya la categoría en la respuesta
    });
  }
}
