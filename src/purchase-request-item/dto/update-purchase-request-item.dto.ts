import { PartialType } from '@nestjs/swagger';
import { CreatePurchaseRequestItemDto } from './create-purchase-request-item.dto';

export class UpdatePurchaseRequestItemDto extends PartialType(CreatePurchaseRequestItemDto) {}
