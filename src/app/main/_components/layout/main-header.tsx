"use client";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/_core/components/fragments/avatar";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { authStore } from "@/_store/auth.store";
import { cn } from "@/_core/components/lib/utils";
import MainMobileSideMenu from "./main-mobile-side-menu";
import { Button } from "@/_core/components/fragments/button";
import { AppToggleTheme } from "@/_shared/components/app-toggle-theme";

interface IProps {
  className?: string;
}
export default function MainHeader(props: IProps) {
  const { className } = props;

  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const _authStore = authStore((state) => state);

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  return (
    <>
      <header className={cn("w-full h-16 px-6 flex items-center ", className)}>
        <Button
          variant="ghost"
          className="relative right-4 hidden mobile:flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </Button>

        <section className="ml-auto flex gap-4 items-center">
          <AppToggleTheme />

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="uppercase">
              {_authStore.userProfile?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </section>
      </header>

      {isOpen && <MainMobileSideMenu onClose={() => setIsOpen(false)} />}
    </>
  );
}
