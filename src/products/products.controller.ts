import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProductoDto } from "./dto/create-producto.dto";
import { ProductsService } from "./products.service";
import { Product } from "./entitities/product.entity";
import { PaginationDTO } from "src/common/dtos/pagination.dto";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  create(@Body() createProductoDto: CreateProductoDto): Promise<Product> {
    return this.productsService.create(createProductoDto);
  }

  @Get()
  findAll(@Query() paginationDTO:PaginationDTO )
  // : Promise<Product[]> 
  {
    return this.productsService.findAll(paginationDTO);
  }
}
