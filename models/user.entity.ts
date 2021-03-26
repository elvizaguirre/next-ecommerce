import { hash } from "bcryptjs";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import { Car } from './car.entity';
import { IUser } from "./i.user";

@Entity('users')
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true})
    name: string;

    @Column({ name: 'last_name', type: "varchar", length: 255, nullable: true})
    lastName: string;

    @Column({ type: 'varchar', length: 255, nullable: false})
    email: string;

    @Column({ type: 'varchar', length: 128, nullable: false, select: false })
    password: string;
       
    @OneToMany(() => Car, car => car.user )
    cars: Car[];

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (!this.password) {
            return;
        }
        this.password = await hash(this.password, 10);
    }

}
