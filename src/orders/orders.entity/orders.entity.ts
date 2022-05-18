import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({
    name: "orders",
})
export class Orders extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    user_id: number;

    @Column({ default: 0 })
    customer_debt_id: number;

    @Column({ default: 0 })
    category_id: number;

    @Column({ default: "" })
    category_name: string;

    @Column({ default: 0 })
    material_unit_id: number;

    @Column({ default: "" })
    material_unit_name: string;

    @Column({ default: 0 })
    material_id: number;

    @Column({ default: "" })
    material_name: string;

    @Column({ default: 0 })
    price: number;

    @Column({ default: 0 })
    cost_price: number;

    @Column({ default: 0 })
    quantity: number;

    @Column({ default: 0 })
    status: number;

    @Column({ default: 0 })
    total_cost_price_amount: number;

    @Column({ default: 0 })
    total_amount: number;

    @CreateDateColumn()
    updated_at: Date;

    @UpdateDateColumn()
    created_at: Date;

}
