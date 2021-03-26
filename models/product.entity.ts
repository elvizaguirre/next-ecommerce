import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false})
    name: string;

    @Column({ type: 'float', nullable: false})
    price: number;

    @Column({ type: 'varchar', length: 255, nullable: false})
    picture: string;
}