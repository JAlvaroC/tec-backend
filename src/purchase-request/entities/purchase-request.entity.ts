import { ApiProperty } from "@nestjs/swagger";
import { PurchaseRequestItem } from '../../purchase-request-item/entities/purchase-request-item.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('purchase_requests')
export class PurchaseRequest {

    @ApiProperty({
        uniqueItems: true,
        description: 'Unique identifier for the purchase request',
    })
      @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Date of the purchase request',
  })
  @Column()
  createdAt: string;

  @ApiProperty({
    description: 'Status of the purchase request',
  })
  @Column()
  status: 'PENDING' | 'APPROVED' | 'REJECTED';


  @OneToMany(() => PurchaseRequestItem, (purchaseRequestItem) => purchaseRequestItem.purchaseRequest, { eager: true })
   @JoinColumn({ name: 'purchaseRequestId' })
  @ApiProperty({ type: () => PurchaseRequestItem, isArray: true })
  items: PurchaseRequestItem[];
}

