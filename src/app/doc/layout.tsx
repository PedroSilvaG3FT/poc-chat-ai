"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Each from "@/_shared/components/app-each";
import Show from "@/_shared/components/app-show";
import { cn } from "@/_core/components/lib/utils";
import MenuGroup from "./_components/ui/menu-group";
import { DOC_MENU_GROUPS } from "./_constants/menu.constant";
import MenuGroupPopover from "./_components/ui/menu-group-popover";
import { AppToggleTheme } from "@/_shared/components/app-toggle-theme";
import { IBaseLayoutProps } from "@/_shared/interfaces/layout.interface";
import { Sidebar, SidebarBody } from "@/_core/components/fragments/ui/sidebar";

export default function DocLayout({ children }: IBaseLayoutProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <section
      className={cn(
        "h-screen rounded-md flex flex-col md:flex-row w-full flex-1 mx-auto border bg-secondary border-neutral-200 dark:border-neutral-700 overflow-hidden mobile:border-none mobile:rounded-none"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className={cn("justify-between gap-10")}>
          <section className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Each
              data={DOC_MENU_GROUPS}
              render={(data) => (
                <Show>
                  <Show.When condition={open}>
                    <MenuGroup data={data} />
                  </Show.When>
                  <Show.Else>
                    <MenuGroupPopover data={data} />
                  </Show.Else>
                </Show>
              )}
            />

            <footer className="mt-auto w-full flex items-center justify-center mobile:flex-col mobile:gap-2">
              <AppToggleTheme />

              <Show>
                <Show.When condition={open}>
                  <small className="w-full text-center text-xs opacity-40">
                    Developed by <br />
                    <Link
                      href="https://www.linkedin.com/in/pedro-silva-65996a181/"
                      className="hover:underline"
                      target="_blank"
                    >
                      Pedro Silva
                    </Link>
                  </small>
                </Show.When>
              </Show>
            </footer>
          </section>
        </SidebarBody>
      </Sidebar>

      <section className="overflow-auto w-full h-full p-4 rounded-tl-2xl mobile:rounded-t-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-background">
        <main className="w-full">{children}</main>
      </section>
    </section>
  );
}
