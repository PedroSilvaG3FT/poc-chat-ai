"use client";
import Card from "./gallery-generation-card";
import Each from "@/_shared/components/app-each";
import { IGeneratedImageItem } from "@/_shared/interfaces/generate-image.interface";

interface IProps {
  className?: string;
  generations: IGeneratedImageItem[];
}
export const GalleryGeneration = (props: IProps) => {
  const { className, generations } = props;

  const getSpan = (data: IGeneratedImageItem) => {
    const aspectRatio = data.imageWidth / data.imageHeight;

    if (aspectRatio > 1.5) return "col-span-2";
    if (aspectRatio < 0.7) return "row-span-2";
    if (data.imageWidth > 1000 || data.imageHeight)
      return "col-span-2 row-span-2";

    return "";
  };

  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] auto-rows-[200px]">
      <Each
        data={generations}
        render={(item) => <Card data={item} className={getSpan(item)} />}
      />
    </section>
  );
};
