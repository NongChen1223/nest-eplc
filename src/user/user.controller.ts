import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @Get('code')
  // createCode(@Req() req, @Res() res, @Session() session) {
  //   const captcha = svgCaptchs.create({
  //     size: 4,
  //     fontSize: 50,
  //     width: 100,
  //     height: 34,
  //     background: '#cc9966',
  //   });
  //   session.code = captcha.text;
  //   res.type('image/svg+html');
  //   res.send(captcha.data);
  // }
  @Post('create')
  createrUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
