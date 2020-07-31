import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity"

@Entity({ name: 'ServiceProvider' })
export class ServiceProvider extends BaseEntity {
    @Column({type: 'varchar', length: 200})
    name: string;

    @Column({type: 'varchar', length: 200})
    email: string;

    @Column({type: 'varchar', length: 200})
    photo: string;

    @Column({type: 'varchar', length: 100})
    password: string;

    @Column({type: 'varchar', length: 1000, nullable: true})
    description: string;

    @Column({type: 'varchar', length: 100, nullable: true})
    adress: string;

    @Column({type: 'varchar', length: 1000, nullable: true})
    adressComplement: string;

    @Column({type: 'varchar', length: 2})
    state: string;

    @Column({type: 'varchar', length: 100, nullable: true})
    city: string;

    @Column({type: 'varchar', length: 20})
    zipcode: string;

    @Column({type: 'varchar', length: 1000})
    citiesCare: string;

    @Column({type: 'varchar', length: 1000})
    categoriesCare: string;

    @Column({type: 'varchar', length: 50})
    phone: string;

}