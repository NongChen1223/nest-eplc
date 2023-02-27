import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, Like, EntityManager } from 'typeorm';
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
    private userRepository: Repository<UserEntity>,
  ) {}
  /* 创建用户 */
  async createUser(createUserDto: CreateUserDto): Promise<ResultData> {
    try {
      await validateOrReject(createUserDto);
      const user = new UserEntity();
      const existPhone = await this.userRepository.findOne({
        where: { phone: user.phone },
      });
      if (existPhone) {
        return ResultData.fail(AppHttpCode.PARAM_INVALID, `该手机号码已注册`);
      }
      Object.assign(user, createUserDto);
      console.log('user', user);
      this.userRepository.save(user);
      return ResultData.ok(createUserDto, '创建用户成功');
    } catch (errors) {
      console.log('创建用户失败', errors);
      return ResultData.fail(AppHttpCode.PARAM_INVALID, `用户创建失败`);
    }
  }
  /* 查找用户 */
  findAll(query: { KeyWord: string }) {
    return this.userRepository.find({
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
