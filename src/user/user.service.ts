import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import {
  validateOrReject,
  ValidationError,
  ValidatorOptions,
} from 'class-validator';
import { AppHttpCode } from '../common/enums/code.enum';
import { ResultData } from '../common/utils/result';
import { use } from 'passport';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly user: Repository<UserEntity>,
  ) {}
  /* 创建用户 */
  async createUser(createUserDto: CreateUserDto): Promise<ResultData> {
    try {
      //校验字段
      console.log('校验字段', createUserDto);
      await validateOrReject(createUserDto);
      return ResultData.ok(createUserDto, '创建用户成功');
    } catch (errors) {
      console.log('创建用户失败 抛出异常', errors);
      const missingFields = errors.map((e) => e.property).join(',');
      console.log('missingFields字符串', missingFields);
      return ResultData.fail(
        AppHttpCode.PARAM_INVALID,
        `缺失必要参数：${missingFields}`,
      );
    }
  }

  /* 查找用户 */
  findAll(query: { KeyWord: string }) {
    return this.user.find({
      where: {
        name: Like(`%${query.KeyWord}`),
      },
    });
  }

  // findOne(id: number): Promise<UserEntity>{
  //   return user
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
