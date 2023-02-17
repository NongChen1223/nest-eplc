import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  // @Transform(({ value }) => (value === '' ? undefined : value), {
  //   toClassOnly: true,
  // })
  @ApiProperty({ description: '用户昵称' })
  @IsNotEmpty({ message: '用户昵称不能为空' })
  @MinLength(3, { message: '账号昵称至少3个字符' })
  @MaxLength(20, { message: '账号昵称最多20个字符' })
  readonly name: string;

  // @ApiProperty({ description: '用户登录密码' })
  // @Transform(({ value }) => (value === '' ? undefined : value), {
  //   toClassOnly: true,
  // })
  // @IsNotEmpty({ message: '密码不能为空' })
  // @IsString({ message: '密码类型错误，正确类型 string' })
  // @MinLength(6, { message: '密码至少6个字符长度' })
  // @MaxLength(20, { message: '密码最多20个字符长度' })
  // readonly password: string;

  // @ApiProperty({ description: '手机号', required: false })
  // @Transform(({ value }) => (value === '' ? undefined : value), {
  //   toClassOnly: true,
  // })
  // @IsNotEmpty({ message: '用户手机号不能为空' })
  // @IsString({ message: '手机号必须是字符串类型' })
  // @IsMobilePhone(
  //   'zh-CN',
  //   { strictMode: false },
  //   { message: '请输入正确的手机号' },
  // )
  // phone: string;

  // @ApiProperty({ description: '邮箱', required: false })
  // @Transform(({ value }) => (value === '' ? undefined : value), {
  //   toClassOnly: true,
  // })
  // @IsNotEmpty({ message: '用户邮箱不能为空' })
  // @IsString({ message: '邮箱必须是字符串类型' })
  // @ValidateIf((o) => o.email !== undefined) // 当 email 字段存在时才校验
  // @IsEmail(undefined, { message: '请输入正确的邮箱地址' })
  // email: string;
}
