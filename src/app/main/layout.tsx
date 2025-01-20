import MainHeader from "./_components/layout/main-header";
import MainSideMenu from "./_components/layout/main-side-menu";
import { IBaseLayoutProps } from "@/_shared/interfaces/layout.interface";

export default function MainLayout({ children }: IBaseLayoutProps) {
  return (
    <section className="h-screen flex items-stretch bg-secondary overflow-hidden">
      <MainSideMenu />

      <section className="h-full w-full border-l border-foreground/10">
        <MainHeader />

        <main className="rounded-tl-3xl relative right-[1px] w-[calc(100%+1px)] bg-background border border-foreground/10 h-full p-4 overflow-auto">
          {children}
        </main>
      </section>
    </section>
  );
}
