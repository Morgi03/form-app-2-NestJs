import { Get, Controller, Render, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('form')
  getHello(): object {
    return {};
  }
  root() {
    return {};
  }
  @Post()
  handleColor(@Body() body: object): string {
    return 'OK ' + Object.values(body);
  }
}
