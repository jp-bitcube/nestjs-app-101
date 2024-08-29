import { Injectable } from '@nestjs/common';
import { Role, User } from './users.type';

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
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  create(user: User) {
    const id = this.getRandomInt(1000);
    const newUser = {
      id,
      ...user,
    };
    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updatedUser: Partial<User>) {
    this.users = this.users.map((u) => {
      if (u.id === id) {
        return { ...u, ...updatedUser };
      }

      return u;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
