import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProviderDto {
  @ApiProperty({
    description: 'Nombre del proveedor',
    nullable: false,
    minLength: 3,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'RUC del proveedor',
    nullable: false,
    minLength: 11,
    maxLength: 11,
  })
  @IsString()
  @IsNotEmpty()
  ruc: string;

  @ApiProperty({
    description: 'Teléfono del proveedor',
    nullable: false,
    minLength: 7,
    maxLength: 15,
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Dirección del proveedor',
    nullable: false,
    minLength: 10,
    maxLength: 100,
    example: 'Av. Siempre Viva 742',
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}
