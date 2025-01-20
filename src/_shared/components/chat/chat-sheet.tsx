import Chat from "./chat";
import { ChevronLeft } from "lucide-react";
import { ReactNode, useState } from "react";
import { cn } from "@/_core/components/lib/utils";
import { Button } from "@/_core/components/fragments/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/_core/components/fragments/sheet";

interface IProps {
  children: ReactNode;
  conversationId: string;
}
export default function ChatSheet(props: IProps) {
  const { children, conversationId } = props;
  const [isFullSize, setIsFullSize] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className={cn(
          "transition-all duration-300 mobile:w-screen",
          isFullSize ? "min-w-[800px]" : "min-w-[400px]"
        )}
      >
        <Button
          size="icon"
          variant="outline"
          onClick={() => setIsFullSize(!isFullSize)}
          className="scale-75 absolute top-[15%] -left-5 mobile:hidden tablet:hidden rounded-full"
        >
          <ChevronLeft
            className={cn(
              "w-4 h-4 transition-all duration-300",
              isFullSize && "rotate-180"
            )}
          />
        </Button>

        <Chat conversationId={conversationId} />
      </SheetContent>
    </Sheet>
  );
}
