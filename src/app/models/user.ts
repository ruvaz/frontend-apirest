export class User {

  constructor(
    public name: string,
    public email: string,
    public password?: string,
    public img?: string,
    public role?: 'ADMIN_ROLE' | 'USER_ROLE',
    public uid?: string
  ) {
  }
}
