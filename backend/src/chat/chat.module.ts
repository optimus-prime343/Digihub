import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from '../users/entities/user.entity'
import { ChatController } from './chat.controller'
import { ChatService } from './chat.service'
import { Message } from './entities/message.entity'
import { ChatGateway } from './gateways/chat.gateway'

@Module({
    imports: [TypeOrmModule.forFeature([Message, User])],
    providers: [ChatGateway, ChatService],
    controllers: [ChatController],
})
export class ChatModule {}
