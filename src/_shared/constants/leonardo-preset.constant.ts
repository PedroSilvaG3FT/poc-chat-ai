import { ILeonardoPreset } from "../interfaces/leonardo-ai.interface";
import {
  ELeonardoPresetStyle,
  ELeonardoPresetStyleId,
} from "../enums/leonardo-styles.enum";

export const LEONARDO_AI_PRESETS: ILeonardoPreset[] = [
  {
    id: `1`,
    name: `Leonardo Phoenix`,
    modelId: `6b645e3a-d64f-4341-a6d8-7a3690fbf042`,
    initialStyleId: ELeonardoPresetStyleId.Dynamic,
    imageURL: `/images/leonardo/models/leonardo-phoenix.webp`,
    description: `Uma versão prévia do nosso próprio modelo fundamental. Aderência excepcional ao prompt.`,
    styles: [
      {
        name: `3D Render`,
        style: ELeonardoPresetStyle.Render3D,
        id: ELeonardoPresetStyleId.Render3D,
      },
      {
        name: `Bokeh`,
        style: ELeonardoPresetStyle.Bokeh,
        id: ELeonardoPresetStyleId.Bokeh,
      },
      {
        name: `Cinematic`,
        style: ELeonardoPresetStyle.Cinematic,
        id: ELeonardoPresetStyleId.Cinematic,
      },
      {
        name: `Cinematic Concept`,
        id: ELeonardoPresetStyleId.CinematicConcept,
        style: ELeonardoPresetStyle.CinematicCloseup,
      },
      {
        name: `Creative`,
        style: ELeonardoPresetStyle.Creative,
        id: ELeonardoPresetStyleId.Creative,
      },
      {
        name: `Dynamic`,
        style: ELeonardoPresetStyle.Dynamic,
        id: ELeonardoPresetStyleId.Dynamic,
      },
      {
        name: `Fashion`,
        style: ELeonardoPresetStyle.Fashion,
        id: ELeonardoPresetStyleId.Fashion,
      },
      {
        name: `Design Pop Art`,
        style: ELeonardoPresetStyle.Creative,
        id: ELeonardoPresetStyleId.GraphicDesignPopArt,
      },
      {
        name: `Design Vector`,
        style: ELeonardoPresetStyle.Illustration,
        id: ELeonardoPresetStyleId.GraphicDesignVector,
      },
      {
        name: `HDR`,
        style: ELeonardoPresetStyle.HDR,
        id: ELeonardoPresetStyleId.HDR,
      },
      {
        name: `Illustration`,
        style: ELeonardoPresetStyle.Illustration,
        id: ELeonardoPresetStyleId.Illustration,
      },
      {
        name: `Macro`,
        style: ELeonardoPresetStyle.Macro,
        id: ELeonardoPresetStyleId.Macro,
      },
      {
        name: `Minimalist`,
        style: ELeonardoPresetStyle.Minimalistic,
        id: ELeonardoPresetStyleId.Minimalist,
      },
      {
        name: `Moody`,
        style: ELeonardoPresetStyle.Moody,
        id: ELeonardoPresetStyleId.Moody,
      },
      {
        name: `None`,
        style: ELeonardoPresetStyle.None,
        id: ELeonardoPresetStyleId.None,
      },
      {
        name: `Portrait`,
        style: ELeonardoPresetStyle.Portrait,
        id: ELeonardoPresetStyleId.Portrait,
      },
      {
        name: `Ray Traced`,
        style: ELeonardoPresetStyle.Raytraced,
        id: ELeonardoPresetStyleId.RayTraced,
      },
      {
        name: `Sketch (B&W)`,
        style: ELeonardoPresetStyle.SketchBw,
        id: ELeonardoPresetStyleId.SketchBW,
      },
      {
        name: `Sketch (Color)`,
        style: ELeonardoPresetStyle.SketchColor,
        id: ELeonardoPresetStyleId.SketchColor,
      },
      {
        name: `Stock Photo`,
        style: ELeonardoPresetStyle.StockPhoto,
        id: ELeonardoPresetStyleId.StockPhoto,
      },
      {
        name: `Vibrant`,
        style: ELeonardoPresetStyle.Vibrant,
        id: ELeonardoPresetStyleId.Vibrant,
      },
    ],
  },
  {
    id: `2`,
    name: `Anime`,
    imageURL: `/images/leonardo/models/anime.webp`,
    modelId: `e71a1c2f-4f80-4800-934f-2c68979d8cc8`,
    initialStyleId: `b2a54a51-230b-4d4f-ad4e-8409bf58645f`,
    description: `Alta velocidade focado em Anime que se destaca em uma variedade de estilos de anime, ilustrativos e CG.`,
    styles: [
      {
        name: `Anime Background`,
        id: `5f611024-668e-41cc-b538-4569a7985cad`,
        style: ELeonardoPresetStyle.Anime,
      },
      {
        name: `Anime Screencap`,
        id: `df2def02-1104-46c8-a857-39292fcd9091`,
        style: ELeonardoPresetStyle.Anime,
      },
      {
        name: `Semi-Realism`,
        id: `aab2fcb9-3600-4039-9c25-a2a26515df5f`,
        style: ELeonardoPresetStyle.Creative,
      },
      {
        name: `Anime Retro`,
        id: `1824f984-dc0b-4f72-aa32-0442091d488c`,
        style: ELeonardoPresetStyle.Anime,
      },
      {
        name: `Anime Monochrome`,
        id: `16818741-bdbb-474f-a7a8-1e33d706658e`,
        style: ELeonardoPresetStyle.Anime,
      },
      {
        name: `Illustration`,
        id: `bf0b8b5f-735f-4141-a365-8d8aa78fd147`,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Character Sheet`,
        id: `726585f5-d231-4a3a-bee9-9a5e5d3df779`,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Anime General`,
        id: `b2a54a51-230b-4d4f-ad4e-8409bf58645f`,
        style: ELeonardoPresetStyle.Anime,
      },
      {
        name: `Manga`,
        id: `ca934804-ef39-4e1b-af37-608021452444`,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Anime (None)`,
        id: `e89ca6f0-7653-4db6-8a24-ded9d1267d84`,
        style: ELeonardoPresetStyle.Anime,
      },
      {
        name: `Flat Illustration`,
        id: `32b653d2-8819-4363-bc82-a6466dfcb825`,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Character Sheet Painterly`,
        id: `5d256598-5671-424c-8152-27943f1000f1`,
        style: ELeonardoPresetStyle.Illustration,
      },
    ],
  },
  {
    id: `3`,
    name: `Cinematic Kino`,
    modelId: `aa77f04e-3eec-4034-9c07-d0f619684628`,
    initialStyleId: ELeonardoPresetStyleId.Cinematic,
    imageURL: `/images/leonardo/models/cinematic-kino.webp`,
    description: `Combina Kino XL e PhotoReal para grandes resultados cinematográficos`,
    styles: [
      {
        name: `Bokeh`,
        id: ELeonardoPresetStyleId.Bokeh,
        style: ELeonardoPresetStyle.Bokeh,
      },
      {
        name: `Cinematic`,
        id: ELeonardoPresetStyleId.Cinematic,
        style: ELeonardoPresetStyle.Cinematic,
      },
      {
        name: `Close-Up`,
        id: `cc53f935-884c-40a0-b7eb-1f5c42821fb5`,
        style: ELeonardoPresetStyle.CinematicCloseup,
      },
      {
        name: `Creative`,
        id: ELeonardoPresetStyleId.Creative,
        style: ELeonardoPresetStyle.Creative,
      },
      {
        name: `Dynamic`,
        id: `e47049ae-ba6b-4597-9677-d09e0ff4c566`,
        style: ELeonardoPresetStyle.Dynamic,
      },
      {
        name: `Fashion`,
        id: ELeonardoPresetStyleId.Fashion,
        style: ELeonardoPresetStyle.Fashion,
      },
      {
        name: `Film`,
        id: `85da2dcc-c373-464c-9a7a-5624359be859`,
        style: ELeonardoPresetStyle.Film,
      },
      {
        name: `Food`,
        id: `d574325d-1278-4fe2-974b-768525f253c3`,
        style: ELeonardoPresetStyle.Food,
      },
      {
        name: `HDR`,
        id: ELeonardoPresetStyleId.HDR,
        style: ELeonardoPresetStyle.HDR,
      },
      {
        name: `Long Exposure`,
        id: `b220bdb6-1378-43fc-9159-e8ff2154e9f7`,
        style: ELeonardoPresetStyle.LongExposure,
      },
      {
        name: `Macro`,
        id: ELeonardoPresetStyleId.Macro,
        style: ELeonardoPresetStyle.Macro,
      },
      {
        name: `Minimalist`,
        id: ELeonardoPresetStyleId.Minimalist,
        style: ELeonardoPresetStyle.Minimalistic,
      },
      {
        name: `Monochrome`,
        id: `a2f7ea66-959b-4bbe-b508-6133238b76b6`,
        style: ELeonardoPresetStyle.Monochrome,
      },
      {
        name: `Moody`,
        id: ELeonardoPresetStyleId.Moody,
        style: ELeonardoPresetStyle.Moody,
      },
      {
        name: `Neutral`,
        id: `0d914779-c822-430a-b976-30075033f1c4`,
        style: ELeonardoPresetStyle.Neutral,
      },
      {
        name: `None`,
        id: `6f943f17-3bfd-4a30-9786-ec2ab79a5fed`,
        style: ELeonardoPresetStyle.None,
      },
      {
        name: `Portrait`,
        id: ELeonardoPresetStyleId.Portrait,
        style: ELeonardoPresetStyle.Portrait,
      },
      {
        name: `Retro`,
        id: `6105baa2-851b-446e-9db5-08a671a8c42f`,
        style: ELeonardoPresetStyle.Retro,
      },
      {
        name: `Stock Photo`,
        id: ELeonardoPresetStyleId.StockPhoto,
        style: ELeonardoPresetStyle.StockPhoto,
      },
      {
        name: `Unprocessed`,
        id: `62736842-6e4b-4028-b79a-4f1a1606e893`,
        style: ELeonardoPresetStyle.Unprocessed,
      },
      {
        name: `Vibrant`,
        id: ELeonardoPresetStyleId.Vibrant,
        style: ELeonardoPresetStyle.Vibrant,
      },
    ],
  },
  {
    id: `4`,
    name: `Concept Art`,
    modelId: `2067ae52-33fd-4a82-bb92-c2c55e7d2786`,
    imageURL: `/images/leonardo/models/concept-art.webp`,
    initialStyleId: `726585f5-d231-4a3a-bee9-9a5e5d3df779`,
    description: `Predefinição generalizada para fins de ideação de conceitos.`,
    styles: [
      {
        name: `Character Sheet`,
        id: `726585f5-d231-4a3a-bee9-9a5e5d3df779`,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Cinematic Concept`,
        id: ELeonardoPresetStyleId.CinematicConcept,
        style: ELeonardoPresetStyle.CinematicCloseup,
      },
      {
        name: `Environment`,
        id: `6e13a467-7dde-415a-8020-0ce2b27bc4e8`,
        style: ELeonardoPresetStyle.Environment,
      },
      {
        name: `Game Concept`,
        id: `09d2b5b5-d7c5-4c02-905d-9f84051640f4`,
        style: ELeonardoPresetStyle.Creative,
      },
      {
        name: `Game Concept 3D`,
        id: `e4d8224a-d804-4b00-b383-b1f3213b9faf`,
        style: ELeonardoPresetStyle.Render3D,
      },
      {
        name: `Character Sheet Painterly`,
        id: `5d256598-5671-424c-8152-27943f1000f1`,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Game Concept Cartoon`,
        id: `5e931eed-1ab9-48a0-aad0-ea5c7d13d472`,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Stylized Illustration`,
        id: `fed4e15f-84b3-4f6e-9b20-9d3a3798eab8`,
        style: ELeonardoPresetStyle.Illustration,
      },
    ],
  },
  {
    id: `5`,
    name: `Graphic Design`,
    modelId: `2067ae52-33fd-4a82-bb92-c2c55e7d2786`,
    imageURL: `/images/leonardo/models/graphic-design.webp`,
    initialStyleId: `703d6fe5-7f1c-4a9e-8da0-5331f214d5cf`,
    description: `Design gráfico profissional com facilidade e precisão.`,
    styles: [
      {
        name: `Graphic Design 2D`,
        id: `703d6fe5-7f1c-4a9e-8da0-5331f214d5cf`,
        style: ELeonardoPresetStyle.Creative,
      },
      {
        name: `Graphic Design 3D`,
        id: `7d7c2bc5-4b12-4ac3-81a9-630057e9e89f`,
        style: ELeonardoPresetStyle.Render3D,
      },
      {
        name: `Graphic Design Art Deco`,
        id: `ee13fe69-c387-4728-b274-de390a067200`,
        style: ELeonardoPresetStyle.Creative,
      },
      {
        name: `Graphic Design Minimalist`,
        id: `785d778b-cdd3-4cf5-8ec1-d6e995254077`,
        style: ELeonardoPresetStyle.Minimalistic,
      },
      {
        name: `Graphic Design Pop Art`,
        id: ELeonardoPresetStyleId.GraphicDesignPopArt,
        style: ELeonardoPresetStyle.Creative,
      },
      {
        name: `Graphic Design Vector`,
        id: ELeonardoPresetStyleId.GraphicDesignVector,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `None`,
        id: `6f943f17-3bfd-4a30-9786-ec2ab79a5fed`,
        style: ELeonardoPresetStyle.None,
      },
    ],
  },
  {
    id: `6`,
    name: `Illustrative Albedo`,
    modelId: `2067ae52-33fd-4a82-bb92-c2c55e7d2786`,
    initialStyleId: ELeonardoPresetStyleId.Illustration,
    description: `Ilustrações de alta qualidade sem esforço.`,
    imageURL: `/images/leonardo/models/albedo-ilustrativo.webp`,
    styles: [
      {
        name: `3D Render`,
        id: ELeonardoPresetStyleId.Render3D,
        style: ELeonardoPresetStyle.Render3D,
      },
      {
        name: `Anime General`,
        id: `b2a54a51-230b-4d4f-ad4e-8409bf58645f`,
        style: ELeonardoPresetStyle.Anime,
      },
      {
        name: `Dynamic`,
        id: `e47049ae-ba6b-4597-9677-d09e0ff4c566`,
        style: ELeonardoPresetStyle.Dynamic,
      },
      {
        name: `Environment`,
        id: `6e13a467-7dde-415a-8020-0ce2b27bc4e8`,
        style: ELeonardoPresetStyle.Environment,
      },
      {
        name: `Food`,
        id: `d574325d-1278-4fe2-974b-768525f253c3`,
        style: ELeonardoPresetStyle.Food,
      },
      {
        name: `Game Concept 3D`,
        id: `e4d8224a-d804-4b00-b383-b1f3213b9faf`,
        style: ELeonardoPresetStyle.Render3D,
      },
      {
        name: `Illustration`,
        id: ELeonardoPresetStyleId.Illustration,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Minimalist`,
        id: ELeonardoPresetStyleId.Minimalist,
        style: ELeonardoPresetStyle.Minimalistic,
      },
      {
        name: `Moody`,
        id: ELeonardoPresetStyleId.Moody,
        style: ELeonardoPresetStyle.Moody,
      },
      {
        name: `None`,
        id: `6f943f17-3bfd-4a30-9786-ec2ab79a5fed`,
        style: ELeonardoPresetStyle.None,
      },
      {
        name: `Portrait`,
        id: `ab5a4220-7c42-41e5-a578-eddb9fed3d75`,
        style: ELeonardoPresetStyle.Portrait,
      },
      {
        name: `Ray Traced`,
        id: ELeonardoPresetStyleId.RayTraced,
        style: ELeonardoPresetStyle.Raytraced,
      },
      {
        name: `Sketch (B&W)`,
        id: ELeonardoPresetStyleId.SketchBW,
        style: ELeonardoPresetStyle.SketchBw,
      },
      {
        name: `Sketch (Color)`,
        id: ELeonardoPresetStyleId.SketchColor,
        style: ELeonardoPresetStyle.SketchColor,
      },
      {
        name: `Game Concept Cartoon`,
        id: `5e931eed-1ab9-48a0-aad0-ea5c7d13d472`,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Stylized Illustration`,
        id: `fed4e15f-84b3-4f6e-9b20-9d3a3798eab8`,
        style: ELeonardoPresetStyle.Illustration,
      },
    ],
  },
  {
    id: `7`,
    name: `Leonardo Lightning`,
    modelId: `b24e16ff-06e3-43eb-8d33-4416c2d75876`,
    initialStyleId: `e47049ae-ba6b-4597-9677-d09e0ff4c566`,
    imageURL: `/images/leonardo/models/leonardo-lightning.webp`,
    description: `O modelo mais rápido da plataforma que tende ao fotorrealismo.`,
    styles: [
      {
        name: `3D Render`,
        id: ELeonardoPresetStyleId.Render3D,
        style: ELeonardoPresetStyle.Render3D,
      },
      {
        name: `Bokeh`,
        id: ELeonardoPresetStyleId.Bokeh,
        style: ELeonardoPresetStyle.Bokeh,
      },
      {
        name: `Cinematic`,
        id: ELeonardoPresetStyleId.Cinematic,
        style: ELeonardoPresetStyle.Cinematic,
      },
      {
        name: `Creative`,
        id: ELeonardoPresetStyleId.Creative,
        style: ELeonardoPresetStyle.Creative,
      },
      {
        name: `Dynamic`,
        id: `e47049ae-ba6b-4597-9677-d09e0ff4c566`,
        style: ELeonardoPresetStyle.Dynamic,
      },
      {
        name: `Fashion`,
        id: ELeonardoPresetStyleId.Fashion,
        style: ELeonardoPresetStyle.Fashion,
      },
      {
        name: `Film`,
        id: `85da2dcc-c373-464c-9a7a-5624359be859`,
        style: ELeonardoPresetStyle.Film,
      },
      {
        name: `Food`,
        id: `d574325d-1278-4fe2-974b-768525f253c3`,
        style: ELeonardoPresetStyle.Food,
      },
      {
        name: `Illustration`,
        id: ELeonardoPresetStyleId.Illustration,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Minimalist`,
        id: ELeonardoPresetStyleId.Minimalist,
        style: ELeonardoPresetStyle.Minimalistic,
      },
      {
        name: `Monochrome`,
        id: `a2f7ea66-959b-4bbe-b508-6133238b76b6`,
        style: ELeonardoPresetStyle.Monochrome,
      },
      {
        name: `Moody`,
        id: ELeonardoPresetStyleId.Moody,
        style: ELeonardoPresetStyle.Moody,
      },
      {
        name: `Neutral`,
        id: `0d914779-c822-430a-b976-30075033f1c4`,
        style: ELeonardoPresetStyle.Neutral,
      },
      {
        name: `None`,
        id: `6f943f17-3bfd-4a30-9786-ec2ab79a5fed`,
        style: ELeonardoPresetStyle.None,
      },
      {
        name: `Portrait`,
        id: `ab5a4220-7c42-41e5-a578-eddb9fed3d75`,
        style: ELeonardoPresetStyle.Portrait,
      },
      {
        name: `Ray Traced`,
        id: ELeonardoPresetStyleId.RayTraced,
        style: ELeonardoPresetStyle.Raytraced,
      },
      {
        name: `Retro`,
        id: `6105baa2-851b-446e-9db5-08a671a8c42f`,
        style: ELeonardoPresetStyle.Retro,
      },
      {
        name: `Sketch (B&W)`,
        id: ELeonardoPresetStyleId.SketchBW,
        style: ELeonardoPresetStyle.SketchBw,
      },
      {
        name: `Sketch (Color)`,
        id: ELeonardoPresetStyleId.SketchColor,
        style: ELeonardoPresetStyle.SketchColor,
      },
      {
        name: `Stock Photo`,
        id: ELeonardoPresetStyleId.StockPhoto,
        style: ELeonardoPresetStyle.StockPhoto,
      },
      {
        name: `Unprocessed`,
        id: `62736842-6e4b-4028-b79a-4f1a1606e893`,
        style: ELeonardoPresetStyle.Unprocessed,
      },
      {
        name: `Vibrant`,
        id: ELeonardoPresetStyleId.Vibrant,
        style: ELeonardoPresetStyle.Vibrant,
      },
    ],
  },
  {
    id: `8`,
    name: `Lifelike Vision`,
    modelId: `5c232a9e-9061-4777-980a-ddc8e65647c6`,
    initialStyleId: `e47049ae-ba6b-4597-9677-d09e0ff4c566`,
    imageURL: `/images/leonardo/models/lifelike-vision.webp`,
    description: `Imagens hiper-realistas com detalhes incríveis.`,
    styles: [
      {
        name: `3D Render`,
        id: ELeonardoPresetStyleId.Render3D,
        style: ELeonardoPresetStyle.Render3D,
      },
      {
        name: `Bokeh`,
        id: ELeonardoPresetStyleId.Bokeh,
        style: ELeonardoPresetStyle.Bokeh,
      },
      {
        name: `Cinematic`,
        id: ELeonardoPresetStyleId.Cinematic,
        style: ELeonardoPresetStyle.Cinematic,
      },
      {
        name: `Close-Up`,
        id: `cc53f935-884c-40a0-b7eb-1f5c42821fb5`,
        style: ELeonardoPresetStyle.CinematicCloseup,
      },
      {
        name: `Creative`,
        id: ELeonardoPresetStyleId.Creative,
        style: ELeonardoPresetStyle.Creative,
      },
      {
        name: `Dynamic`,
        id: `e47049ae-ba6b-4597-9677-d09e0ff4c566`,
        style: ELeonardoPresetStyle.Dynamic,
      },
      {
        name: `Fashion`,
        id: ELeonardoPresetStyleId.Fashion,
        style: ELeonardoPresetStyle.Fashion,
      },
      {
        name: `Film`,
        id: `85da2dcc-c373-464c-9a7a-5624359be859`,
        style: ELeonardoPresetStyle.Film,
      },
      {
        name: `HDR`,
        id: ELeonardoPresetStyleId.HDR,
        style: ELeonardoPresetStyle.HDR,
      },
      {
        name: `Illustration`,
        id: ELeonardoPresetStyleId.Illustration,
        style: ELeonardoPresetStyle.Illustration,
      },
      {
        name: `Long Exposure`,
        id: `b220bdb6-1378-43fc-9159-e8ff2154e9f7`,
        style: ELeonardoPresetStyle.LongExposure,
      },
      {
        name: `Macro`,
        id: ELeonardoPresetStyleId.Macro,
        style: ELeonardoPresetStyle.Macro,
      },
      {
        name: `Minimalist`,
        id: ELeonardoPresetStyleId.Minimalist,
        style: ELeonardoPresetStyle.Minimalistic,
      },
      {
        name: `Monochrome`,
        id: `a2f7ea66-959b-4bbe-b508-6133238b76b6`,
        style: ELeonardoPresetStyle.Monochrome,
      },
      {
        name: `Moody`,
        id: ELeonardoPresetStyleId.Moody,
        style: ELeonardoPresetStyle.Moody,
      },
      {
        name: `None`,
        id: `6f943f17-3bfd-4a30-9786-ec2ab79a5fed`,
        style: ELeonardoPresetStyle.None,
      },
      {
        name: `Portrait`,
        id: `ab5a4220-7c42-41e5-a578-eddb9fed3d75`,
        style: ELeonardoPresetStyle.Portrait,
      },
      {
        name: `Ray Traced`,
        id: ELeonardoPresetStyleId.RayTraced,
        style: ELeonardoPresetStyle.Raytraced,
      },
      {
        name: `Retro`,
        id: `6105baa2-851b-446e-9db5-08a671a8c42f`,
        style: ELeonardoPresetStyle.Retro,
      },
      {
        name: `Vibrant`,
        id: ELeonardoPresetStyleId.Vibrant,
        style: ELeonardoPresetStyle.Vibrant,
      },
    ],
  },
  {
    id: `9`,
    name: `Portrait Perfect`,
    modelId: `aa77f04e-3eec-4034-9c07-d0f619684628`,
    initialStyleId: `4edb03c9-8a26-4041-9d01-f85b5d4abd71`,
    imageURL: `/images/leonardo/models/portrait-perfect.webp`,
    description: `Retratos deslumbrantes e profissionais sem esforço.`,
    styles: [
      {
        name: `None`,
        id: `6f943f17-3bfd-4a30-9786-ec2ab79a5fed`,
        style: ELeonardoPresetStyle.None,
      },
      {
        name: `Portrait Bokeh`,
        id: `0717967c-1a32-4c67-bc56-b020e97b1b81`,
        style: ELeonardoPresetStyle.Portrait,
      },
      {
        name: `Portrait Close-Up`,
        id: `39a14739-5d21-420b-a4ef-e8a80978185a`,
        style: ELeonardoPresetStyle.Portrait,
      },
      {
        name: `Portrait Fashion`,
        id: ELeonardoPresetStyleId.PortraitFashion,
        style: ELeonardoPresetStyle.Fashion,
      },
      {
        name: `Portrait Film`,
        id: `d4fb14b9-972b-4215-b461-616a51b6eeb8`,
        style: ELeonardoPresetStyle.Film,
      },
      {
        name: `Portrait Moody`,
        id: `c9b08088-f497-4e30-b258-6d535d928cc5`,
        style: ELeonardoPresetStyle.Moody,
      },
      {
        name: `Portrait Retro`,
        id: `3e645868-7d35-4b8c-974c-10bd8c2de972`,
        style: ELeonardoPresetStyle.Retro,
      },
      {
        name: `Portrait Cinematic`,
        id: `4edb03c9-8a26-4041-9d01-f85b5d4abd71`,
        style: ELeonardoPresetStyle.Portrait,
      },
    ],
  },
  {
    id: `10`,
    name: `Stock Photography`,
    modelId: `aa77f04e-3eec-4034-9c07-d0f619684628`,
    description: `Fotos de alta qualidade sem esforço.`,
    initialStyleId: ELeonardoPresetStyleId.StockPhoto,
    imageURL: `/images/leonardo/models/stock-photography.webp`,
    styles: [
      {
        name: `None`,
        id: `6f943f17-3bfd-4a30-9786-ec2ab79a5fed`,
        style: ELeonardoPresetStyle.None,
      },
      {
        name: `Stock Photo`,
        id: ELeonardoPresetStyleId.StockPhoto,
        style: ELeonardoPresetStyle.StockPhoto,
      },
    ],
  },
];
