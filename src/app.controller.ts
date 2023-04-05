import { Controller, Get, Param, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/service/cats.service';

@Controller('cats')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  //  localhost:8000/cats/hello
  @Get('hello')
  getHello(@Req() req: Request, @Body() Body, @Param() param): string {
    console.log(req);
    console.log(param);

    return this.appService.getHello();
  }
}
