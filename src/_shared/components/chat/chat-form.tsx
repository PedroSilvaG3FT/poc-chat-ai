"use client";

import Show from "../app-show";
import { LucideIcon, SendHorizonal } from "lucide-react";
import { cn } from "@/_core/components/lib/utils";
import { KeyboardEvent, useRef, useState } from "react";
import ChatGradientLoading from "./chat-gradient-loading";
import { Button } from "@/_core/components/fragments/button";
import AppLoadingIndicator from "../loading/app-loading-indicator";
import ChatSuggestionMessageMenu from "./chat-suggestion-message-menu";

interface IChatFormProps {
  icon?: LucideIcon;
  className?: string;
  isLoading?: boolean;
  placeholder?: string;
  formClassName?: string;

  isHideSuggestion?: boolean;
  isSuggestionDisabled?: boolean;
  onSubmit: (data: string) => void;
}

export default function ChatForm(props: IChatFormProps) {
  const {
    onSubmit,
    className,
    formClassName,
    isLoading = false,
    isHideSuggestion = false,
    icon: Icon = SendHorizonal,
    isSuggestionDisabled = false,
    placeholder = "Insert your prompt...",
  } = props;

  const [message, setMessage] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const hasMessage = !!message && !!message.trim().length;

    if (e.key === "Enter" && !e.shiftKey && hasMessage && !isLoading) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    onSubmit(message);
    setMessage("");
  };

  return (
    <section className={cn("bg-background w-full pt-4", className)}>
      <form
        className={cn(
          "shadow-md border border-foreground/05 min-h-[64px] p-2 pl-8 w-full flex items-center rounded-2xl overflow-hidden",
          formClassName
        )}
      >
        <textarea
          rows={1}
          required
          value={message}
          ref={textareaRef}
          disabled={isLoading}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-12 max-h-48 appearance-none outline-none bg-transparent text-foreground/60 resize-none whitespace-pre-wrap overflow-y-auto place-content-center"
        />

        <section className="flex gap-2 items-center">
          <Show>
            <Show.When condition={!isHideSuggestion}>
              <ChatSuggestionMessageMenu
                onSelectMessage={(data) => onSubmit(data)}
                isDisabled={isSuggestionDisabled || isLoading}
              />
            </Show.When>
          </Show>

          <Button
            variant="secondary"
            onClick={handleSubmit}
            disabled={isLoading || !message.trim().length}
            className="h-12 w-12 flex items-center justify-center transition-all duration-500 hover:scale-90"
          >
            <Show>
              <Show.When condition={isLoading}>
                <AppLoadingIndicator className="w-16" />
              </Show.When>
              <Show.Else>
                <Icon className="h-14 w-14" />
              </Show.Else>
            </Show>
          </Button>
        </section>
      </form>

      <ChatGradientLoading isLoading={isLoading} />
    </section>
  );
}
