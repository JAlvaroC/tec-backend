import { Product } from "src/products/entitities/product.entity";
import { PurchaseRequest } from "src/purchase-request/entities/purchase-request.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity('purchase_request_items')
export class PurchaseRequestItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  quantity: number;

  @Column()
  reason: string;

  @ManyToOne(() => PurchaseRequest, pr => pr.items)
  @JoinColumn({ name: 'purchaseRequestId' })
  purchaseRequest: PurchaseRequest;

  @Column()
  purchaseRequestId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
