import {
  IChatStreamCallback,
  IChatSendMessageRequest,
} from "../interfaces/chat.interface";
import { ChatUtil } from "../utils/chat.util";
import { APP_HTTP_CLIENT } from "@/_core/http";

export class ChatService {
  static create(title: string) {
    return APP_HTTP_CLIENT.post(`/chat/conversation`, { title });
  }

  static sendMessage(payload: IChatSendMessageRequest) {
    return APP_HTTP_CLIENT.post(`/chat/message`, payload);
  }

  static async sendChatMessageStream(
    body: IChatSendMessageRequest,
    callback: IChatStreamCallback
  ) {
    try {
      const path = `/chat/message/stream`;
      const response = await ChatUtil.handleRequestStream(path, body);
      await ChatUtil.handleReceiveStream(response, callback);

      return true;
    } catch (error) {
      throw error;
    }
  }
}
