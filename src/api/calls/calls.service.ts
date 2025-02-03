import { Injectable } from '@nestjs/common';

type Message = {
  sent: string
  from: string
  to: string
  content: string
}

@Injectable()
export class CallsService {
  getType(type:string): string {
    return type;
  }

  returnMessages(): JSON {
    var response: any={};
    const messages: Message[] = []
    const message: Message = {
        sent: new Date().toDateString(),
        from: "User",
        to: "AI",
        content: "I require assistance with XYZ"
    };
    
    messages.push(message);

    message.sent= new Date().toDateString();
    message.from="AI";
    message.to="User";
    message.content = "You said you require assistance with XYZ. I am unable to provide this assistance at this time. Routing to live agent to provide further support."

    messages.push(message);

    response.messages = messages;
    return response;
  }
}
