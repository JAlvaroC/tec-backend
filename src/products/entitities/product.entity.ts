// export class Producto {
//   id: number;
//   nombre: string;
//   precio: number;
//   stock: number;
// }

import { ApiProperty } from "@nestjs/swagger";
import { Category } from "src/categories/entities/category.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

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

  // @ManyToOne(() => Category, (category) => category.products,{eager: true})
  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  @ApiProperty({ type: () => Category })
  category: Category;
  
}
