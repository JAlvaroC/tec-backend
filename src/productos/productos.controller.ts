import { Controller } from '@nestjs/common';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}
  @POST()
  create(@Body() createProductoDto: CreateProductoDto): Producto {
    return this.productosService.create(createProductoDto);
  }
}
