import { z } from "zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "@/_core/components/fragments/form";
import ImageGenerationSelectSize from "./image-generation-select-size";
import ImageGenerationSelectStyle from "./image-generation-select-style";
import ImageGenerationSelectPreset from "./image-generation-select-preset";
import { ELeonardoPresetStyle } from "@/_shared/enums/leonardo-styles.enum";
import { LEONARDO_AI_SIZES } from "@/_shared/constants/leonardo-size.constant";
import { LEONARDO_AI_PRESETS } from "@/_shared/constants/leonardo-preset.constant";

const formSchema = z.object({
  size: z.string(),
  style: z.string(),
  preset: z.string(),
});

interface IFormData extends z.infer<typeof formSchema> {}

export interface IImageGenerationParamsChangeData {
  style: string;
  width: number;
  model: string;
  height: number;
  styleId: string;
}

interface IProps {
  onChange: (data: IImageGenerationParamsChangeData) => void;
}

const defaultPreset = LEONARDO_AI_PRESETS[0];
const defaultStyle = ELeonardoPresetStyle.Dynamic;
const defaultSize = LEONARDO_AI_SIZES[0].options[0];

export default function ImageGenerationParams(props: IProps) {
  const { onChange } = props;

  const [presetStyles, setPresetStyles] = useState(
    LEONARDO_AI_PRESETS[0].styles
  );

  const form = useForm<IFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      size: defaultSize.id,
      preset: defaultPreset.id,
      style: defaultPreset.initialStyleId,
    },
  });

  const formValue = form.watch();
  const preset = LEONARDO_AI_PRESETS.find(({ id }) => id == formValue.preset);

  useEffect(() => {
    if (preset) form.setValue("style", preset.initialStyleId || "");
  }, [presetStyles]);

  useEffect(() => {
    if (preset) setPresetStyles(preset.styles || []);
  }, [formValue.preset, preset]);

  useEffect(() => {
    const style = preset?.styles.find(({ id }) => id == formValue.style)?.style;

    const size = LEONARDO_AI_SIZES.find((item) =>
      item.options.some(({ id }) => id === formValue.size)
    )?.options?.find(({ id }) => id === formValue.size);

    onChange({
      style: style || defaultStyle,
      width: size?.width || defaultSize.width,
      height: size?.height || defaultSize.height,
      model: preset?.modelId || defaultPreset.modelId,
      styleId: formValue.style || defaultPreset.initialStyleId,
    });
  }, [formValue]);

  return (
    <FormContainer {...form}>
      <form className="w-full grid gap-4 grid-cols-3 mobile:grid-cols-1">
        <ImageGenerationSelectPreset name="preset" control={form.control} />
        <ImageGenerationSelectStyle
          name="style"
          styles={presetStyles}
          control={form.control}
          value={formValue.style}
        />
        <ImageGenerationSelectSize name="size" control={form.control} />
      </form>
    </FormContainer>
  );
}
