export interface IGenerateImageRequest {
  width: number;
  height: number;
  prompt: string;
  modelId: string;
  alchemy: boolean;
  numImages: number;
  presetStyle: string;
}

export interface IGeneratedImageItem {
  id: string;
  prompt: string;
  status: string;
  active: boolean;
  modelId: string;
  outputUrl: string;
  profileId: string;
  imageWidth: number;
  imageHeight: number;
  presetStyle: string;
  generationId: string;
  createdAt: Date | string;
}
