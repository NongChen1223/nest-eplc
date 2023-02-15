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
  Header,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptchs from 'svg-captcha';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBody,
  ApiConsumes,
  ApiQuery,
  ApiExtraModels,
  ApiBearerAuth,
} from '@nestjs/swagger';
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
    // console.log('Body', Body);
    console.log('createUserDto', createUserDto);

    return this.userService.createUser(createUserDto);
  }
}
