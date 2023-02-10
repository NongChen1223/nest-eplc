import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity('sys_user') // @Entity()装饰器自动从所有类生成一个SQL表，以及他们包含的元数据
// @Entity('users') // sql表名为users
export class UserEntity {
  @ApiProperty({ type: String, description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint', comment: '用户id' })
  id: number;

  @ApiProperty({ type: String, description: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @PrimaryColumn({
    type: 'varchar',
    name: 'phone',
    nullable: false,
    length: 20,
    comment: '用户手机号码',
  })
  phone: string;

  @ApiProperty({ type: String, description: '用户昵称' })
  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: false,
    comment: '用户登录密码',
  })
  password: string;

  @ApiProperty({ type: String, description: '邮箱' })
  @Column({ type: 'varchar', comment: '邮箱地址', default: '' })
  eamil: string;

  @ApiProperty({ type: String, description: '头像url' })
  @Column({ type: 'varchar', comment: '头像地址' })
  avatar: string;

  @ApiProperty({ type: Date, description: '创建时间' })
  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_date',
    comment: '创建时间',
  })
  createDate: Date;

  @ApiProperty({ type: Date, description: '更新时间' })
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_date',
    comment: '更新时间',
  })
  updateDate: Date;
}
