import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './service/app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/visitor-history')
  getVisitorHistory(): string {
    return this.appService.getHello();
  }

  @Get('/visitor-stats')
  getVisitorStats(): string {
    return this.appService.getHello();
  }

  @Get('/pending-notifications')
  getPendingNotifications(): string {
    return this.appService.getHello();
  }

  @Post('/add-visitor')
  addVisitor(): string {
    return this.appService.getTest();
  }
}
