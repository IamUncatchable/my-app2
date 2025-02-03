import { Controller, Get, Query, Post } from '@nestjs/common';
import { CallsService } from './calls.service';

@Controller('api/calls')
export class CallsController {
  constructor(private readonly appService: CallsService) {}

  @Get()
  getType(@Query('type') type: string):string{
    return this.appService.getType(type);
  }

  @Post('messages')
  returnMessages():JSON {
    return this.appService.returnMessages();
  }
}
