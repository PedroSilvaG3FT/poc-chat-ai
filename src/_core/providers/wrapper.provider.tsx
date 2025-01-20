import { ReactNode } from "react";
import { StoreProvider } from "./store.provider";
import { ThemeProvider } from "./theme.provider";
import { AuthProvider } from "../contexts/auth.context";
import { TooltipProvider } from "../components/fragments/tooltip";
import { ChatProvider } from "../contexts/chat.context";

export default function WrapperProvider({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <AuthProvider>
        <TooltipProvider>
          <ChatProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              {children}
            </ThemeProvider>
          </ChatProvider>
        </TooltipProvider>
      </AuthProvider>
    </StoreProvider>
  );
}
