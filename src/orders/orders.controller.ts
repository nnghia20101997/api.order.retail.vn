import { Body, Controller, HttpStatus, Post, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Users } from 'src/users/users.entity/users.entity';
import { GetUserFromToken } from 'src/utils.common/utils.decorator.common/utils.decorator.common';
import { BaseResponseData } from 'src/utils.common/utils.response.common/utils.base.response.common';
import { OrdersImportDTO } from './orders.dto/orders.dto.import';
import { OrdersRemoveDTO } from './orders.dto/orders.dto.remove';
import { OrdersReturnDTO } from './orders.dto/orders.dto.return';
import { OrdersSellDTO } from './orders.dto/orders.dto.sell';
import { Orders } from './orders.entity/orders.entity';
import { OrdersDetailResponse } from './orders.response/orders.response.detail';
import { OrdersService } from './orders.service';

@Controller('/api/orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) { }


    @Post("/import")
    @UseGuards(JwtAuthGuard)
    async import(
        @Body(new ValidationPipe()) ordersImportDTO: OrdersImportDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
    ): Promise<any> {

        let response: BaseResponseData = new BaseResponseData();

        let order: Orders = await this.ordersService.spCreateOrderImport(user, ordersImportDTO)

        response.setData(new OrdersDetailResponse(order))

        res.status(HttpStatus.OK).send(response)
    }

    @Post("/remove")
    @UseGuards(JwtAuthGuard)
    async remove(
        @Body(new ValidationPipe()) ordersRemoveDTO: OrdersRemoveDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
    ): Promise<any> {

        let response: BaseResponseData = new BaseResponseData();

        let order: Orders = await this.ordersService.spCreateOrderImport(user, ordersRemoveDTO)

        response.setData(new OrdersDetailResponse(order))

        res.status(HttpStatus.OK).send(response)
    }

    @Post("/return")
    @UseGuards(JwtAuthGuard)
    async return(
        @Body(new ValidationPipe()) ordersReturnDTO: OrdersReturnDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
    ): Promise<any> {

        let response: BaseResponseData = new BaseResponseData();

        let order: Orders = await this.ordersService.spCreateOrderReturn(user, ordersReturnDTO)

        response.setData(new OrdersDetailResponse(order))

        res.status(HttpStatus.OK).send(response)
    }

    @Post("/sell")
    @UseGuards(JwtAuthGuard)
    async sell(
        @Body(new ValidationPipe()) ordersSellDTO: OrdersSellDTO,
        @GetUserFromToken() user: Users,
        @Res() res: Response,
    ): Promise<any> {

        let response: BaseResponseData = new BaseResponseData();

        let order: Orders = await this.ordersService.spCreateOrderSell(user, ordersSellDTO)

        response.setData(new OrdersDetailResponse(order))

        res.status(HttpStatus.OK).send(response)
    }
}


