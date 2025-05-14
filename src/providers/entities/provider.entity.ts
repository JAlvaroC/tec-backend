import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('providers')
export class Provider {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number;

    @Column()
    @ApiProperty()
    name:string;

    @Column()
    @ApiProperty()
    ruc:string;
 
    @Column()
    @ApiProperty()
    phone:string;

    
    @Column()
    @ApiProperty()
    address:string;


}
