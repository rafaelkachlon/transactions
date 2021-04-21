export interface UserModel {
  id: number;
  username: string;
  password: string;
  token: string;
  insertDate: Date;
  lastLogin: Date;
}
