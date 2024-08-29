export interface User {
  readonly id: number;
  name: string;
  email: string;
  role: Role;
}

export type Role = 'INTERN' | 'ADMIN' | 'ENGINEER';
