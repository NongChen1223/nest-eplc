import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { use } from 'passport';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly user: Repository<UserEntity>,
  ) {}
  /* 创建用户 */
  createUser(createUserDto: CreateUserDto) {
    console.log('创建用户', CreateUserDto);
    const data = new UserEntity();
    data.name = createUserDto.name;
    data.phone = createUserDto.phone;
    data.eamil = createUserDto.eamil;
    return this.user.save(data);
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
