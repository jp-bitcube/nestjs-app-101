import { Injectable, NotFoundException } from '@nestjs/common';
import { Role, User } from './users.type';
import { UpdateUserDto } from './dto/update-users.dto';
import { CreateUserDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'JP',
      email: 'jp@test.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Sam',
      email: 'sam@test.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Peter',
      email: 'peter@test.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: Role) {
    if (role) {
      const users = this.users.filter((user) => user.role === role);

      if (users.length === 0) throw new NotFoundException('User Role Not Found');

      return users;
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User Not Found');

    return user;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  create(createUserDto: CreateUserDto) {
    const id = this.getRandomInt(1000);
    const newUser = {
      id,
      ...createUserDto,
    };
    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((u) => {
      if (u.id === id) {
        return { ...u, ...updateUserDto };
      }

      return u;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    if (!removedUser) throw new NotFoundException('User Not Found');

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
