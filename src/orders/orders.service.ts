import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity/users.entity';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-proceduce-result.common/utils.store-proceduce-result.common';
import { Repository } from 'typeorm';
import { OrdersImportDTO } from './orders.dto/orders.dto.import';
import { OrdersRemoveDTO } from './orders.dto/orders.dto.remove';
import { OrdersReturnDTO } from './orders.dto/orders.dto.return';
import { OrdersSellDTO } from './orders.dto/orders.dto.sell';
import { Orders } from './orders.entity/orders.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Orders)
        private orders: Repository<Orders>,
    ) { }

    async spCreateOrderImport(
        user: Users,
        ordersImportDTO: OrdersImportDTO
    ): Promise<Orders> {

        let orderImport: Orders = await this.orders.query(
            "CALL sp_create_order_import(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                ordersImportDTO.customer_debt_id,
                ordersImportDTO.category_id,
                ordersImportDTO.material_unit_id,
                ordersImportDTO.material_id,
                ordersImportDTO.price,
                ordersImportDTO.cost_price,
                ordersImportDTO.quantity,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(orderImport);
        let data: Orders = new StoreProcedureResult<Orders>().getResultDetail(orderImport);
        return data;
    }

    async spCreateOrderRemove(
        user: Users,
        ordersRemoveDTO: OrdersRemoveDTO
    ): Promise<Orders> {

        let orderRemove: Orders = await this.orders.query(
            "CALL sp_create_order_remove(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                ordersRemoveDTO.customer_debt_id,
                ordersRemoveDTO.category_id,
                ordersRemoveDTO.material_unit_id,
                ordersRemoveDTO.material_id,
                ordersRemoveDTO.price,
                ordersRemoveDTO.cost_price,
                ordersRemoveDTO.quantity,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(orderRemove);
        let data: Orders = new StoreProcedureResult<Orders>().getResultDetail(orderRemove);
        return data;
    }

    async spCreateOrderReturn(
        user: Users,
        ordersReturnDTO: OrdersReturnDTO
    ): Promise<Orders> {

        let orderReturn: Orders = await this.orders.query(
            "CALL sp_create_order_return(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                ordersReturnDTO.customer_debt_id,
                ordersReturnDTO.category_id,
                ordersReturnDTO.material_unit_id,
                ordersReturnDTO.material_id,
                ordersReturnDTO.price,
                ordersReturnDTO.cost_price,
                ordersReturnDTO.quantity,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(orderReturn);
        let data: Orders = new StoreProcedureResult<Orders>().getResultDetail(orderReturn);
        return data;
    }

    async spCreateOrderSell(
        user: Users,
        ordersSellDTO: OrdersSellDTO
    ): Promise<Orders> {

        let orderSell: Orders = await this.orders.query(
            "CALL sp_create_order_sell(?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status, @message AS  message",
            [
                user.id,
                ordersSellDTO.customer_debt_id,
                ordersSellDTO.category_id,
                ordersSellDTO.material_unit_id,
                ordersSellDTO.material_id,
                ordersSellDTO.price,
                ordersSellDTO.cost_price,
                ordersSellDTO.quantity,
            ]
        )
        ExceptionStoreProcedure.validateEmptyDetail(orderSell);
        let data: Orders = new StoreProcedureResult<Orders>().getResultDetail(orderSell);
        return data;
    }
}
