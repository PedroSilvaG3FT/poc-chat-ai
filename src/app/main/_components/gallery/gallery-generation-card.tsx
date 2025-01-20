import Image from "next/image";
import { IGeneratedImageItem } from "@/_shared/interfaces/generate-image.interface";
import { Button } from "@/_core/components/fragments/button";
import { Eye } from "lucide-react";
import Link from "next/link";

interface IProps {
  className?: string;
  data: IGeneratedImageItem;
}
export default function GalleryGenerationCard(props: IProps) {
  const { data, className } = props;

  return (
    <article
      className={`relative overflow-hidden rounded-lg shadow-md group ${className}`}
    >
      <Image
        width={400}
        height={600}
        alt={data.prompt}
        src={data.outputUrl}
        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
      />

      <div className="absolute flex items-center justify-end top-0 left-0 right-0 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
        <Button size="icon" variant="secondary" asChild>
          <Link href={data.outputUrl} target="_blank">
            <Eye />
          </Link>
        </Button>
      </div>
    </article>
  );
}
