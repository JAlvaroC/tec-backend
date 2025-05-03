import { Injectable } from '@nestjs/common';
import { Producto } from './entitities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [];
  private idCounter = 1; // Counter to generate unique IDs

  create(dto: CreateProductoDto): Producto {
    const producto: Producto = {
      id: this.idCounter++,
      ...dto,
    };
    this.productos.push(producto);
    return producto;
  }
}
