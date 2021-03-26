import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";



@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false})
    number: string;

    @Column({ type: 'float', nullable: false})
    amount: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
    createdAt: Date;
}