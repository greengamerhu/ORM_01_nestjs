import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class DanceCourse {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column('int', {default: 45000})
    price : number;
}