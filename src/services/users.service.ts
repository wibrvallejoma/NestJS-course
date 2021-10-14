import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';
import { User } from 'src/entities/users.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      username: 'someuser1',
      email: 'email@mail.com',
      password: 'encryptedpass',
      role: 'customer',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId += 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) {
      return null;
    }
    const index = this.getIndex(id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: number) {
    const index = this.getIndex(id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found.`);
    }
    return this.users.splice(index, 1);
  }

  private getIndex(id: number) {
    return this.users.findIndex((item) => item.id === id);
  }
}
