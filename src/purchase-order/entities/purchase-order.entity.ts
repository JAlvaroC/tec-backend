import { Provider } from "src/providers/entities/provider.entity";
import { PurchaseOrderItem } from "src/purchase-order-item/entities/purchase-order-item.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('purchase_orders')
export class PurchaseOrder {
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
  @JoinColumn({ name: 'providerId' })
  provider: Provider;

  
  @Column({ type: 'varchar', length: 30 })
  orderNumber: string;

  @Column({ type: 'date' })
  orderDate: Date;
  
  @Column({ type: 'enum', enum: ['SENT', 'RECEIVED', 'PARTIAL'], default: 'SENT' })
  status: 'SENT' | 'RECEIVED' | 'PARTIAL';
  
  //   @OneToMany(() => PurchaseOrderItem, item => item.purchaseOrder, { cascade: true })
  //   items: PurchaseOrderItem[];

   @Column({ type: 'text', nullable: true })
  notes?: string;

  
  @OneToMany(() => PurchaseOrderItem, item => item.purchaseOrder, { cascade: true })
  items: PurchaseOrderItem[];
  
  
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
