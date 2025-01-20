import {IUser} from "./IUser.ts";

export interface IUsersResponseModel {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}