import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity() // @Entity()装饰器自动从所有类生成一个SQL表，以及他们包含的元数据
// @Entity('users') // sql表名为users
export class User {
  // 主键装饰器，也会进行自增
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;
}
