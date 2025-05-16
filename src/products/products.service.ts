import { BadGatewayException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Product } from './entitities/product.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PaginationDTO } from '../common/dtos/pagination.dto';
import { Category } from "src/categories/entities/category.entity";

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('Product Service');
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>, // Inject the repository for database operations
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>, // Inject the repository for database operations
  ){}
  private productos: Product[] = [];
  private idCounter = 1; // Counter to generate unique IDs

  async create(dto: CreateProductoDto):Promise< Product> {
    const category = await this.categoryRepository.findOneBy({ id: dto.categoryId });

    if(!category) throw new Error('Category not found');
    const product =this.productRepository.create({...dto, category});  
    
    return this.productRepository.save(product);
  }

  async findAll(paginationDTO: PaginationDTO): Promise<Product[]> {
    const { limit, offset } = paginationDTO;
    return this.productRepository.find({
      take: limit,
      skip: offset,
      relations: ['category'], // 🔥 para que incluya la categoría en la respuesta
    });
  }
  private handleExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadGatewayException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs !',
    );
  }
    async deleteAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error);
    }
  }
}
