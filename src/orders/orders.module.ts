import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from 'src/auth/constants';
import { OrdersController } from './orders.controller';
import { Orders } from './orders.entity/orders.entity';
import { OrdersService } from './orders.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Orders]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60m' },
        }),
    ],
    providers: [OrdersService],
    exports: [OrdersService],
    controllers: [OrdersController],
})
export class OrdersModule { }
