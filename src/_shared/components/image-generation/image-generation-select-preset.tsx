"use client";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/_core/components/fragments/select";

import {
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/_core/components/fragments/form";

import Each from "../app-each";
import Image from "next/image";
import { Control } from "react-hook-form";
import { SelectProps } from "@radix-ui/react-select";
import { LEONARDO_AI_PRESETS } from "@/_shared/constants/leonardo-preset.constant";

interface IProps extends SelectProps {
  name: string;
  control: Control<any>;
}

export default function ImageGenerationSelectPreset(props: IProps) {
  return (
    <FormField
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select
              {...props}
              defaultValue={field.value}
              onValueChange={(value) => {
                field.onChange(value);
                if (props.onValueChange) props.onValueChange(value);
              }}
            >
              <SelectTrigger className="w-full h-10 rounded-md">
                <SelectValue placeholder="Preset" />
              </SelectTrigger>

              <SelectContent>
                <Each
                  data={LEONARDO_AI_PRESETS}
                  render={(item) => (
                    <SelectItem value={item.id}>
                      <article className="flex gap-2 items-center">
                        <Image
                          width={30}
                          height={30}
                          alt={item.id}
                          src={item.imageURL}
                          className="object-cover rounded "
                        />

                        <span>{item.name}</span>
                      </article>
                    </SelectItem>
                  )}
                />
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
