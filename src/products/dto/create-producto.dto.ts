import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsPositive,  IsString, MinLength } from "class-validator";

export class CreateProductoDto {
  @ApiProperty({
    description: "Nombre del producto",
    nullable: false,
    minLength: 3,
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'Precio del producto',
    nullable: false,
    minimum: 0,
    example: 10.99,
  })

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;


  @ApiProperty()
  @IsNumber()
  stock: number;

  @ApiProperty()
  @IsNumber()
  categoryId: number;
}
