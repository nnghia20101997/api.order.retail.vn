import { IsInt, IsString } from "class-validator";

export class OrdersReturnDTO {


    @IsInt()
    customer_debt_id: number;

    @IsInt()
    category_id: number;

    @IsInt()
    material_unit_id: number;

    @IsInt()
    material_id: number;

    @IsInt()
    price: number;

    @IsInt()
    cost_price: number;

    @IsInt()
    quantity: number;

}