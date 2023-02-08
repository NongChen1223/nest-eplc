import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
} from 'typeorm';
@Entity() // @Entity()装饰器自动从所有类生成一个SQL表，以及他们包含的元数据
// @Entity('users') // sql表名为users
export class User {
  // 主键装饰器，也会进行自增
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ select: true, comment: '登录密码' })
  password: string;

  @Generated('uuid')
  uuid: string;

  @Column()
  Eamil: string;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;
}
