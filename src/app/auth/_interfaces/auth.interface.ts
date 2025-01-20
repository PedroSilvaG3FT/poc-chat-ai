import { IUserProfile } from "@/_shared/interfaces/user.interface";

export interface IAuthSignInCredentials {
  email: string;
  password: string;
}

export interface IAuthSignInResponse {
  token: string;
  user: IUserProfile;
}
