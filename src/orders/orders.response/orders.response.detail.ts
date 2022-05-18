import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { Orders } from "../orders.entity/orders.entity";

export class OrdersDetailResponse {

    id: number;

    user_id: number;

    customer_debt_id: number;

    category_id: number;

    category_name: string;

    material_unit_id: number;

    material_unit_name: string;

    material_id: number;

    material_name: string;

    price: number;

    cost_price: number;

    quantity: number;

    status: number;

    total_cost_price_amount: number;

    total_amount: number;

    updated_at: string;

    created_at: string;

    constructor(order?: Orders) {
        this.id = order ? +order.id : 0;
        this.user_id = order ? +order.user_id : 0;
        this.customer_debt_id = order ? +order.customer_debt_id : 0;
        this.category_id = order ? +order.category_id : 0;
        this.category_name = order ? order.category_name : "";
        this.material_unit_id = order ? +order.material_unit_id : 0;
        this.material_unit_name = order ? order.material_unit_name : "";
        this.material_id = order ? +order.material_id : 0;
        this.material_name = order ? order.material_name : "";
        this.price = order ? +order.price : 0;
        this.cost_price = order ? +order.cost_price : 0;
        this.quantity = order ? +order.quantity : 0;
        this.status = order ? +order.status : 0;
        this.total_cost_price_amount = order ? +order.total_cost_price_amount : 0;
        this.total_amount = order ? +order.total_amount : 0;
        this.updated_at = order ? UtilsDate.formatDateTimeVNToString(order.updated_at) : "";
        this.created_at = order ? UtilsDate.formatDateTimeVNToString(order.created_at) : "";
    }

    public mapToList(data: Orders[]) {
        let response: OrdersDetailResponse[] = [];

        data.forEach(e => {
            response.push(new OrdersDetailResponse(e));
        });

        return response;
    }
}