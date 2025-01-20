import { APP_HTTP_CLIENT } from "@/_core/http";
import { IBaseResponse } from "../interfaces/response.interface";
import {
  IGeneratedImageItem,
  IGenerateImageRequest,
} from "../interfaces/generate-image.interface";

export class GenerateImageService {
  static generate(payload: IGenerateImageRequest) {
    return APP_HTTP_CLIENT.post<IBaseResponse<IGeneratedImageItem>>(
      `/image/generate`,
      payload
    );
  }

  static getImagesByUser() {
    return APP_HTTP_CLIENT.get<IBaseResponse<IGeneratedImageItem[]>>(
      `/image/me`
    );
  }
}
