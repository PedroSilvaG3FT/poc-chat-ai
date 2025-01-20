import { ELeonardoPresetStyle } from "../enums/leonardo-styles.enum";

export interface ILeonardoPresetStyle {
  id: string;
  name: string;
  style: ELeonardoPresetStyle;
}

export interface ILeonardoPreset {
  id: string;
  name: string;
  modelId: string;
  imageURL: string;
  description: string;
  initialStyleId: string;
  styles: ILeonardoPresetStyle[];
}

export interface ILeonardoSizeOption {
  id: string;
  name: string;
  value: string;
  width: number;
  height: number;
  aspectRatio: string;
}

export interface ILeonardoSize {
  title: string;
  options: ILeonardoSizeOption[];
}
