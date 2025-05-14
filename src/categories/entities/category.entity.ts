import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({name: 'categories'})
export class Category {
@ApiProperty({
    uniqueItems: true,
    description: 'Unique identifier for the category',
})
@PrimaryGeneratedColumn()
id: number;

@Column()
@ApiProperty({})
name: string;


@Column()
@ApiProperty({})
code: string;

@Column({nullable: true})
@ApiProperty({required: false})
description?: string;





}
