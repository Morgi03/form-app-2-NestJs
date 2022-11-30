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
    if (body.fontsize <= 0) {
      throw new Error('A méret pozitív kell, hogy legyen');
    }
    if (!/^#[a-f0-9]$/.test(body.textcolor)) {
      throw new Error('Nem hexadecimális a szám');
    }
    return body;
  }
}
