"use client";

import { X } from "lucide-react";
import MainSideMenu from "./main-side-menu";
import { Button } from "@/_core/components/fragments/button";
import { Separator } from "@/_core/components/fragments/separator";

interface IProps {
  className?: string;
  onClose: () => void;
}

export default function MainMobileSideMenu(props: IProps) {
  return (
    <section className="w-screen h-[100dvh] fixed top-0 left-0 flex flex-col bg-background z-10 p-6">
      <Button className="self-start ml-6" onClick={props.onClose}>
        <X />
      </Button>

      <Separator className="my-6 w-full" />

      <MainSideMenu className="w-full h-full" />
    </section>
  );
}
