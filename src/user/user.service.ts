import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

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
    console.log('创建用户', CreateUserDto);
    try {
      const data = new UserEntity();
      data.name = createUserDto.name;
      data.phone = createUserDto.phone;
      data.password = createUserDto.password;
      data.avatar = createUserDto.avatar;
      return this.user.save(data);
    } catch (err) {
      return err;
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
