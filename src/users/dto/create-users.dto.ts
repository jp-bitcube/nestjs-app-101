import { IsEmail, IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { Role } from '../users.type';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'ENGINEER'], {
    message: 'Valid role required',
  })
  role: Role;
}
