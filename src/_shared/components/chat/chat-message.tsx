import { Sparkles } from "lucide-react";
import { IconReload } from "@tabler/icons-react";
import { IChatMessage } from "@/_shared/interfaces/chat.interface";
import { useChat } from "@/_core/contexts/chat.context";
import { EChatRole } from "@/_shared/enums/chat.enum";
import Animate from "../app-animate";
import { cn } from "@/_core/components/lib/utils";
import Show from "../app-show";
import { Alert, AlertDescription } from "@/_core/components/fragments/alert";
import AppMarkdown from "../app-markdown";

interface IChatMessageProps {
  data: IChatMessage;
  className?: string;
}

export default function ChatMessage(props: IChatMessageProps) {
  const { data, className } = props;
  const { handleRetry } = useChat();

  const isError = data.role === EChatRole.ERROR;
  const isUserMessage = data.role === EChatRole.USER;

  return (
    <Animate
      animation={isUserMessage ? "animate__fadeInRight" : "animate__fadeIn"}
    >
      <section
        className={cn(
          className,
          isUserMessage
            ? "self-end p-2 px-4 border border-foreground/10 rounded-2xl max-w-[70%]"
            : "self-start"
        )}
      >
        <Show>
          <Show.When condition={isUserMessage}>
            <p>{data.content}</p>
          </Show.When>
          <Show.When condition={isError}>
            <Alert variant="destructive" className="p-2">
              <AlertDescription className="flex gap-2 items-center">
                <IconReload
                  onClick={handleRetry}
                  className="cursor-pointer transition-all duration-500 hover:scale-95"
                />
                {data.content}
              </AlertDescription>
            </Alert>
          </Show.When>
          <Show.Else>
            <article className="grid gap-2">
              <nav className="flex gap-2 mb-4 items-center">
                <i className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></i>
                <h4>GPT</h4>
              </nav>

              <AppMarkdown text={data?.content || ""} />
            </article>
          </Show.Else>
        </Show>
      </section>
    </Animate>
  );
}
