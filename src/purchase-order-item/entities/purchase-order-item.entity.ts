import { Product } from "src/products/entitities/product.entity";
import { PurchaseOrder } from "src/purchase-order/entities/purchase-order.entity";
import { PurchaseRequestItem } from "src/purchase-request-item/entities/purchase-request-item.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('purchase_order_items')
export class PurchaseOrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  purchaseOrderId: number;

  @ManyToOne(() => PurchaseOrder, po => po.items)
  @JoinColumn({ name: 'purchaseOrderId' })
  purchaseOrder: PurchaseOrder;

  @Column()
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ nullable: true })
  purchaseRequestItemId: number;

  @ManyToOne(() => PurchaseRequestItem, { nullable: true })
  @JoinColumn({ name: 'purchaseRequestItemId' })
  purchaseRequestItem?: PurchaseRequestItem;

  @Column()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
