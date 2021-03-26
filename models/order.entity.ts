import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { Car } from './car.entity';
import { ICar } from './i.car';

@Entity('orders')
export class Order {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false, default: 1})
    amount: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observation?: string;
   
    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
    product: Product

    @ManyToOne(() => Car, car => car.orders)
    @JoinColumn({ name: 'cart_id', referencedColumnName: 'id'})
    car: ICar;

}
