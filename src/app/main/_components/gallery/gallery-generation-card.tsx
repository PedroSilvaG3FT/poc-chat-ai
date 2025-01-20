import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, ImageOff } from "lucide-react";
import { Button } from "@/_core/components/fragments/button";
import { IGeneratedImageItem } from "@/_shared/interfaces/generate-image.interface";

interface IProps {
  className?: string;
  data: IGeneratedImageItem;
}

export default function GalleryGenerationCard(props: IProps) {
  const { data, className } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <article
      className={`relative overflow-hidden rounded-lg shadow-md group ${className}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <ImageOff className="text-gray-400" size={48} />
        </div>
      ) : (
        <Image
          width={400}
          height={600}
          alt={data.prompt}
          src={data.outputUrl}
          className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${
            isLoading ? "invisible" : "visible"
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}

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
