import { Role } from '../users.type';

export class CreateUserDto {
  name: string;
  email: string;
  role: Role;
}
