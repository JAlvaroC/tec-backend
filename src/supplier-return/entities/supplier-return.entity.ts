import { Provider } from "src/providers/entities/provider.entity";
import { SupplierReturnItem } from "src/supplier-return-item/entities/supplier-return-item.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('supplier_returns')
export class SupplierReturn {
  @PrimaryGeneratedColumn()
  id: number;

//   @Column()
//   supplierId: number;

//   @ManyToOne(() => Supplier)
//   @JoinColumn({ name: 'supplierId' })
//   supplier: Supplier;
  @Column()
  providerId: number;

  @ManyToOne(() => Provider)
  @JoinColumn({ name: 'providderId' })
  supplier: Provider;

  @Column({ type: 'text' })
  reason: string;

  @Column({ type: 'enum', enum: ['REQUESTED', 'RETURNED'], default: 'REQUESTED' })
  status: 'REQUESTED' | 'RETURNED';

  @OneToMany(() => SupplierReturnItem, item => item.supplierReturn, { cascade: true })
  items: SupplierReturnItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}