import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallsController } from './api/calls/calls.controller';
import { CallsService} from './api/calls/calls.service'

@Module({
  imports: [],
  controllers: [AppController,CallsController],
  providers: [AppService,CallsService],
})
export class AppModule {}
