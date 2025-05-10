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

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;
  categoria: string;
  stock: number;
}
