import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateUserDto {
  @ApiProperty({ description: '用户昵称' })
  @Transform(({ value }) => (value === '' ? undefined : value), {
    toClassOnly: true,
  })
  @IsNotEmpty({ message: '用户昵称不能为空' })
  @MaxLength(20, { message: '账号最多20个字符' })
  readonly name: string;

  @ApiProperty({ description: '用户登录密码' })
  @Transform(({ value }) => (value === '' ? undefined : value), {
    toClassOnly: true,
  })
  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: '密码至少6个字符长度' })
  @MaxLength(20, { message: '密码最多20个字符长度' })
  readonly password: string;

  @ApiProperty({ description: '手机号', required: false })
  @Transform(({ value }) => (value === '' ? undefined : value), {
    toClassOnly: true,
  })
  @IsNotEmpty({ message: '用户手机号不能为空' })
  @IsString({ message: '手机号必须是字符串类型' })
  @IsMobilePhone(
    'zh-CN',
    { strictMode: false },
    { message: '请输入正确的手机号' },
  )
  phone: string;

  @ApiProperty({ description: '邮箱', required: false })
  @Transform(({ value }) => (value === '' ? undefined : value), {
    toClassOnly: true,
  })
  @IsNotEmpty({ message: '用户邮箱不能为空' })
  @IsString({ message: '邮箱必须是字符串类型' })
  @ValidateIf((o) => o.email !== undefined) // 当 email 字段存在时才校验
  @IsEmail(undefined, { message: '请输入正确的邮箱地址' })
  email: string;
}
