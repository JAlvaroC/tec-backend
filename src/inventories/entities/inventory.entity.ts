import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from 'src/products/entitities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('inventory')
export class Inventory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  // @ManyToOne(() => Product, { eager: true })
  // @JoinColumn({ name: 'producto_id' }) // esto crea la columna 'producto_id'
  // @ApiProperty({ type: () => Product })
  // product: Product;

  @ManyToOne(() => Product, product => product.inventories, { onDelete: 'CASCADE' })
@JoinColumn({ name: 'product_id' })
product: Product;


  @Column()
  @ApiProperty()
  almacen: string;

  @Column('int')
  @ApiProperty()
  stock_actual: number;

  @Column('int')
  @ApiProperty()
  stock_minimo: number;
}
