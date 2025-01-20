import { EChatRole } from "../enums/chat.enum";

export interface IChatMessage {
  role: EChatRole;
  content: string;
}

export interface IChatSendMessageRequest {
  message: string;
  chatConversationId: string;
}

export interface IChatStreamCallback
  extends Partial<{
    onReceive: (text: string) => void;
    onError: <Data>(error: Data) => void;
    onComplete: (content: string) => void;
  }> {}
