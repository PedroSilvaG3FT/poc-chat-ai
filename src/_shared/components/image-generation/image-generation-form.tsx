import _ from "lodash";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import ChatForm from "../chat/chat-form";
import { cn } from "@/_core/components/lib/utils";
import ChatGradientLoading from "../chat/chat-gradient-loading";
import ImageGenerationParams, {
  IImageGenerationParamsChangeData,
} from "./image-generation-params";

export interface ImageGenerationFormData
  extends IImageGenerationParamsChangeData {
  prompt: string;
}

interface IProps {
  className?: string;
  isLoading: boolean;
  onSubmit: (data: ImageGenerationFormData) => void;
}

export default function ImageGenerationForm(props: IProps) {
  const { isLoading, onSubmit, className } = props;
  const [params, setParams] = useState({} as IImageGenerationParamsChangeData);

  const onParamsChanged = (data: IImageGenerationParamsChangeData) => {
    if (_.isEqual(data, params)) return;
    setParams(data);
  };

  return (
    <section>
      <article
        className={cn(
          "shadow-md border border-foreground/05 p-4 rounded-2xl",
          className
        )}
      >
        <ChatForm
          icon={Sparkles}
          className="pt-0"
          isHideSuggestion
          isSuggestionDisabled={true}
          formClassName="p-0 shadow-none border-none"
          onSubmit={(prompt) => onSubmit({ ...params, prompt })}
        />

        <ImageGenerationParams onChange={onParamsChanged} />
      </article>

      <ChatGradientLoading
        isLoading={isLoading}
        className="mt-0 relative bottom-6"
      />
    </section>
  );
}
