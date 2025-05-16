import { Product } from "src/products/entitities/product.entity";
import { PurchaseOrderItem } from "src/purchase-order-item/entities/purchase-order-item.entity";
import { SupplierReturn } from "src/supplier-return/entities/supplier-return.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('supplier_return_items')
export class SupplierReturnItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  supplierReturnId: number;

  @ManyToOne(() => SupplierReturn, sr => sr.items)
  @JoinColumn({ name: 'supplierReturnId' })
  supplierReturn: SupplierReturn;

  @Column()
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  purchaseOrderItemId: number;

  @ManyToOne(() => PurchaseOrderItem)
  @JoinColumn({ name: 'purchaseOrderItemId' })
  purchaseOrderItem?: PurchaseOrderItem;
}
