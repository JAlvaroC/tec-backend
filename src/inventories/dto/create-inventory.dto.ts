import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {
  @ApiProperty()
  @IsNumber()
  productoId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  almacen: string;

  @ApiProperty()
  @IsNumber()
  stock_actual: number;

  @ApiProperty()
  @IsNumber()
  stock_minimo: number;
}
