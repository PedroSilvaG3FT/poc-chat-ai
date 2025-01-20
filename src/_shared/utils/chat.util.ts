import { API_URL } from "@/_core/http";
import { TokenUtil } from "./token.util";
import { IChatStreamCallback } from "../interfaces/chat.interface";

export class ChatUtil {
  public static handleRequestStream(path: string, body: object = {}) {
    const token = TokenUtil.getAccessToken();

    return fetch(`${API_URL}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  public static async handleReceiveStream(
    response: Response,
    callback: IChatStreamCallback
  ): Promise<void> {
    let content = "";
    const decoder = new TextDecoder();
    const reader = response.body?.getReader();

    try {
      const isSuccessStatus = String(response?.status).startsWith("2");

      if (!isSuccessStatus) throw new Error(`Error: ${response.status}`);
      if (!reader) throw new Error("Response body is null");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        content += chunk;
        console.log("content, ", content);
        callback.onReceive?.(content);
      }
    } catch (error) {
      callback.onError?.(error);
      throw error;
    } finally {
      reader?.releaseLock();
      callback.onComplete?.(content);
    }
  }
}
