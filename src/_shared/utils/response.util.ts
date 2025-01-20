import { AxiosError } from "axios";
import { ToastUtil } from "./toast.util";
import { IBaseResponse } from "../interfaces/response.interface";

export class ResponseUtil {
  static handleError(
    error: AxiosError,
    defaultMessage = "Error on processing"
  ) {
    const data = error.response?.data as IBaseResponse<unknown>;
    const messages = data?.messages || [];

    if (messages.length) messages.forEach((item) => ToastUtil.error(item));
    else ToastUtil.error(defaultMessage);
  }
}
