import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ description: '用户昵称' })
  @IsNotEmpty({ message: '用户昵称 不能为空' })
  @MaxLength(20, { message: '账号最多20个字符' })
  readonly name: string;

  @ApiProperty({ description: '用户登录密码' })
  @IsNotEmpty({ message: 'password 不能为空' })
  @MinLength(6, { message: '密码至少5个字符长度' })
  @MaxLength(20, { message: '密码最多20个字符长度' })
  readonly password: string;

  @ApiProperty({ description: '手机号', required: false })
  @IsString({ message: 'phoneNum 类型错误，正确类型 string' })
  @IsMobilePhone(
    'zh-CN',
    { strictMode: false },
    { message: '请输入正确的手机号' },
  )
  readonly phone: string;

  @ApiProperty({ description: '邮箱', required: false })
  @IsString({ message: 'email 类型错误，正确类型 string' })
  @IsEmail()
  @IsOptional()
  readonly eamil: string;

  @ApiProperty({ description: '头像', required: false })
  // @IsString({ message: 'avatar 类型错误，正确类型 string' })
  @IsOptional()
  readonly avatar?: string;
}
