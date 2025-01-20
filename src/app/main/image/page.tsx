"use client";

import { useEffect, useState } from "react";
import { loadingStore } from "@/_store/loading.store";
import { ResponseUtil } from "@/_shared/utils/response.util";
import { GalleryGeneration } from "../_components/gallery/gallery-generation";
import { GenerateImageService } from "@/_shared/services/generate-image.service";
import { IGeneratedImageItem } from "@/_shared/interfaces/generate-image.interface";
import ImageGenerationForm, {
  ImageGenerationFormData,
} from "@/_shared/components/image-generation/image-generation-form";

export default function ImagePage() {
  const _loadingStore = loadingStore((state) => state);

  const [isLoading, setIsLoading] = useState(false);
  const [generations, setGenerations] = useState([] as IGeneratedImageItem[]);

  const handleGenerate = (data: ImageGenerationFormData) => {
    setIsLoading(true);

    GenerateImageService.generate({
      numImages: 1,
      alchemy: true,
      width: data.width,
      height: data.height,
      prompt: data.prompt,
      modelId: data.model,
      presetStyle: data.style,
    })
      .then((response) => {
        console.log(response.data.data);
        setIsLoading(false);
        _loadingStore.setShow(false);
        setGenerations([response.data.data, ...generations]);
      })
      .catch((error) => {
        setIsLoading(false);
        _loadingStore.setShow(false);
        ResponseUtil.handleError(error);
      });
  };

  const getImages = () => {
    _loadingStore.setShow(true);

    GenerateImageService.getImagesByUser()
      .then((response) => {
        setGenerations(response.data.data.reverse());
        _loadingStore.setShow(false);
      })
      .catch((error) => {
        _loadingStore.setShow(false);
        ResponseUtil.handleError(error);
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <section className="pb-24">
      <ImageGenerationForm
        isLoading={isLoading}
        onSubmit={handleGenerate}
        className="mb-12 mx-auto max-w-[780px]"
      />

      <GalleryGeneration generations={generations} />
    </section>
  );
}
