import { Test, TestingModule } from '@nestjs/testing';
import { CallsController } from './calls.controller';
import { CallsService } from './calls.service';

describe('AppController', () => {
  let callsController: CallsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CallsController],
      providers: [CallsService],
    }).compile();

    callsController = app.get<CallsController>(CallsController);
  });

  describe('api', () => {
    describe('calls', () => {
      it('should return "Appointment"', () => {
        expect(callsController.getType('Appointment')).toBe('Appointment');
      });

      const today: string = new Date().toDateString()

      var message: any = {"messages":[{"sent": today,"from":"AI","to":"User","content":"You said you require assistance with XYZ. I am unable to provide this assistance at this time. Routing to live agent to provide further support."},{"sent": today,"from":"AI","to":"User","content":"You said you require assistance with XYZ. I am unable to provide this assistance at this time. Routing to live agent to provide further support."}]};
      it('should return messages', () => {
        expect(callsController.returnMessages()).toEqual(message);
    });
  });
});
});
