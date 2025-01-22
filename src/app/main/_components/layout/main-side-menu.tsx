"use client";

import {
  Image,
  LogOut,
  PanelRight,
  FlaskConical,
  BotMessageSquare,
  Dumbbell,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Each from "@/_shared/components/app-each";
import { cn } from "@/_core/components/lib/utils";
import { Button } from "@/_core/components/fragments/button";

interface IProps {
  className?: string;
}

export default function MainSideMenu(props: IProps) {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(true);

  const MENU_ITEMS = [
    { id: 1, title: `Chat`, url: `/main/chat`, icon: BotMessageSquare },
    { id: 2, title: `Image`, url: `/main/image`, icon: Image },
    { id: 3, title: `Run`, url: `/main/run`, icon: Dumbbell },
  ];

  const _renderItem = (node: ReactNode) => {
    return (
      <div
        className={cn(
          isOpen
            ? "opacity-100 w-auto"
            : "w-0 opacity-0 absolute -left-full -top-full"
        )}
      >
        {node}
      </div>
    );
  };

  return (
    <aside
      className={cn(
        "h-full p-2 pb-5 flex flex-col items-center transition-all duration-500",
        isOpen ? "w-64" : "w-20",
        className
      )}
    >
      <figure className="mobile:hidden rounded-xl w-full p-4 mb-4 flex flex-nowrap max-h-[62px] gap-2 items-center border border-foreground/10">
        {_renderItem(<FlaskConical className="text-purple-500" />)}
        {_renderItem(<h5>POC</h5>)}
        <PanelRight
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto cursor-pointer text-foreground/60"
        />
      </figure>

      <article className="w-full flex gap-2 flex-col">
        <Each
          data={MENU_ITEMS}
          render={(item) => {
            const Icon = item.icon;

            return (
              <Button
                asChild
                variant="ghost"
                className="w-full h-12 flex gap-2 justify-start items-center"
              >
                <Link href={item.url}>
                  <Icon className="min-w-5 min-h-5" />
                  {_renderItem(<span>{item.title}</span>)}
                </Link>
              </Button>
            );
          }}
        />
      </article>

      <Button
        asChild
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-auto justify-start text-red-400"
      >
        <Link href="/auth/login">
          <LogOut />
          {_renderItem(<span className="ml-4">Sign out</span>)}
        </Link>
      </Button>
    </aside>
  );
}
