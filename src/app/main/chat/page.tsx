import { cn } from "@/_core/components/lib/utils";
import Chat from "@/_shared/components/chat/chat";

export default function ChatPage() {
  return (
    <section className={cn("h-[calc(100dvh-100px)] mobile:h-[100dvh-70px]")}>
      <Chat
        className="mx-auto max-w-[780px]"
        conversationId="83a8bbdf-c28a-4502-b18e-8159713a4e83"
      />
    </section>
  );
}
