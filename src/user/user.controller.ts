import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptchs from 'svg-captcha';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    const captcha = svgCaptchs.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966',
    });
    session.code = captcha.text;
    res.type('image/svg+html');
    res.send(captcha.data);
  }

  @Post('creater')
  createrUser(@Body() Body, @Session() session) {
    console.log('Body', Body);
    console.log('Body', session.code);
    return {
      code: 200,
    };
  }
}
