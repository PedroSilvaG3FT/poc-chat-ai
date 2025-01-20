import { APP_HTTP_CLIENT } from "@/_core/http";
import { IBaseResponse } from "@/_shared/interfaces/response.interface";
import {
  IAuthSignInResponse,
  IAuthSignInCredentials,
} from "../_interfaces/auth.interface";

export class AuthService {
  static signIn(payload: IAuthSignInCredentials) {
    return APP_HTTP_CLIENT.post<IBaseResponse<IAuthSignInResponse>>(
      "/auth/sign-in",
      payload
    );
  }
}
