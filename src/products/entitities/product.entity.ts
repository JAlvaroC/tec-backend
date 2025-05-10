// export class Producto {
//   id: number;
//   nombre: string;
//   precio: number;
//   stock: number;
// }

import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'products'})
export class Product {
  @ApiProperty({
    uniqueItems: true,
    description: 'Unique identifier for the product',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Name of the product',
    example: 'Laptop',})
  @Column({})
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;
}
