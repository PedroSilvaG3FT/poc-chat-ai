import Each from "../app-each";
import { GripVertical, Sparkles } from "lucide-react";
import { Card } from "@/_core/components/fragments/card";
import { CHAT_SUGGESTIONS } from "@/_shared/constants/chat-suggestions.contant";

interface IChatInitialContentProps {
  onSelectMessage: (message: string) => void;
}

export default function ChatInitialContent(props: IChatInitialContentProps) {
  const { onSelectMessage } = props;

  return (
    <article className="pb-4 h-full min-h-[570px] flex flex-col items-center justify-end">
      <Sparkles className="h-12 w-12 mb-4 text-foreground/40" />

      <h5 className="text-center mb-6 text-foreground/40">
        Digite no campo a baixo <br />
        ou escolha uma das opções para começar
      </h5>

      <section className="grid gap-2">
        <Each
          data={CHAT_SUGGESTIONS}
          render={(item) => (
            <Card
              onClick={() => onSelectMessage(item)}
              className="p-4 flex gap-2 items-center cursor-pointer transition-transform duration-500 hover:scale-95"
            >
              <GripVertical className="w-4 h-4 text-foreground/40" />
              {item}
            </Card>
          )}
        />
      </section>
    </article>
  );
}
