import { User }  from './user.entity';
import { Order } from './order.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ICar } from './i.car';
import { IUser } from './i.user';

@Entity('cars')
export class Car implements ICar{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean',  default: false })
    cheked?: boolean;

    @ManyToOne(() => User, user => user.cars )
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: IUser;
  
    @OneToMany(() => Order, other => other.car, { cascade: ['remove'] } )
    orders: Order[];

}
