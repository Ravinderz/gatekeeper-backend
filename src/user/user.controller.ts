import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';

@Controller('/user')
export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Get('all')
  getAllUsers(): any {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): any {
    return this.userService.getUserById(id);
  }

  @Post()
  addUser(@Body() user: UserDto): any {
    console.log(user);
    return this.userService.addUser(user);
  }
}
