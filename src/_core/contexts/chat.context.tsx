"use client";

import {
  IChatMessage,
  IChatStreamCallback,
  IChatSendMessageRequest,
} from "@/_shared/interfaces/chat.interface";

import { EChatRole } from "@/_shared/enums/chat.enum";
import { ChatService } from "@/_shared/services/chat.service";
import React, { createContext, useContext, useState } from "react";

interface IChatContext {
  isLoading: boolean;
  messages: IChatMessage[];
  isAiTyping: boolean;
  setIsAiTyping: React.Dispatch<React.SetStateAction<boolean>>;

  handleRetry: () => void;
  handleInit: (conversationId: string) => void;
  handleSend: (content: string, chatConversationId: string) => void;
}

interface IChatProviderProps {
  children: React.ReactNode;
}

const ChatContext = createContext<IChatContext>({
  messages: [],
  isLoading: false,
  isAiTyping: false,

  handleInit: () => {},
  handleSend: () => {},
  handleRetry: () => {},
  setIsAiTyping: () => {},
});

const ChatProvider: React.FC<IChatProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAiTyping, setIsAiTyping] = useState<boolean>(false);

  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const [retryData, setRetryData] = useState<IChatSendMessageRequest>(
    {} as IChatSendMessageRequest
  );

  const handleInit = (conversationId: string) => {
    setMessages([]);
    setIsAiTyping(false);
  };

  const handleRetry = () =>
    handleSend(retryData.message, retryData.chatConversationId);

  const handleError = (messages: IChatMessage[]) => {
    setIsLoading(false);
    setMessages([
      ...messages,
      { role: EChatRole.ERROR, content: `Ocorreu um erro ao enviar menssagem` },
    ]);
  };

  const handleSend = (content: string, chatConversationId: string) => {
    const newMessages: IChatMessage[] = [
      ...messages,
      { content, role: EChatRole.USER },
      { content: "", role: EChatRole.IA },
    ];

    const messagesDTO = newMessages.filter(
      ({ role }) => role !== EChatRole.ERROR
    );

    const callbacks: IChatStreamCallback = {
      onReceive: handleReceiveStream,
      onComplete: () => {
        setIsLoading(false);
        setIsAiTyping(false);
        setMessages((value) => [...value]);
      },
    };

    setIsLoading(true);
    setMessages([...newMessages]);
    setRetryData({ message: content, chatConversationId });

    handleSendMessage(content, chatConversationId, messagesDTO, callbacks);
  };

  const handleReceiveStream = (content: string) => {
    setMessages((value) => {
      const updatedMessages = [...value];
      const lastMessageIndex = updatedMessages.length - 1;
      const lastMessageData = updatedMessages[lastMessageIndex];

      if (lastMessageIndex >= 0 && lastMessageData.role === EChatRole.IA) {
        updatedMessages[lastMessageIndex] = { ...lastMessageData, content };
      }

      return updatedMessages;
    });
  };

  const handleSendMessage = (
    message: string,
    chatConversationId: string,
    messages: IChatMessage[],
    callbacks: IChatStreamCallback
  ) => {
    ChatService.sendChatMessageStream(
      { message, chatConversationId },
      callbacks
    )
      .then(() => {})
      .catch(() => handleError(messages));
  };

  const providerValue: IChatContext = {
    messages,
    isLoading,
    isAiTyping,

    handleInit,
    handleSend,
    handleRetry,
    setIsAiTyping,
  };

  return (
    <ChatContext.Provider value={providerValue}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };

export const useChat = () => {
  const context = useContext(ChatContext);

  if (context === undefined)
    throw new Error("useChat must be used within a ChatProvider");

  return context;
};
