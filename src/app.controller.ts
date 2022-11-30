import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { TextColorDto } from './text-color.dto';

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
  @Render('color')
  handleColor(@Body() body: TextColorDto): object {
    return body;
  }
}
