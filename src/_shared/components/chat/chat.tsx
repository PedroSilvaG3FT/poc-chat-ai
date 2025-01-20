"use client";

import ChatForm from "./chat-form";
import { cn } from "@/_core/components/lib/utils";
import ChatConversation from "./chat-conversation";
import { useChat } from "@/_core/contexts/chat.context";

interface IChatProps {
  className?: string;
  conversationId: string;
}

export default function Chat(props: IChatProps) {
  const { className, conversationId } = props;
  const { messages, isLoading, isAiTyping, handleSend } = useChat();

  const handleSendMessage = (message: string) =>
    handleSend(message, conversationId);

  return (
    <section
      className={cn("relative h-full flex flex-col overflow-hidden", className)}
    >
      <ChatConversation
        data={messages}
        className="flex-grow"
        onSelectInitialMessage={handleSendMessage}
      />

      <ChatForm
        onSubmit={handleSendMessage}
        isLoading={isLoading || isAiTyping}
        className="mt-auto absolute bottom-0"
        isSuggestionDisabled={!messages.length}
      />
    </section>
  );
}
