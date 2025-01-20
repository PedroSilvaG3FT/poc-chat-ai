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
import { Control } from "react-hook-form";
import { LEONARDO_AI_SIZES } from "@/_shared/constants/leonardo-size.constant";
import { SelectGroup, SelectLabel, SelectProps } from "@radix-ui/react-select";

interface IProps extends SelectProps {
  name: string;
  control: Control<any>;
}

export default function ImageGenerationSelectSize(props: IProps) {
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
                <SelectValue placeholder="Size" />
              </SelectTrigger>

              <SelectContent>
                <Each
                  data={LEONARDO_AI_SIZES}
                  render={(group) => (
                    <SelectGroup>
                      <SelectLabel className="font-semibold px-4 py-2">
                        {group.title}
                      </SelectLabel>

                      <Each
                        data={group.options}
                        render={(item) => (
                          <SelectItem value={String(item.id)}>
                            <article className="flex gap-2 items-center">
                              <section>
                                <div
                                  className="h-6 border-2 rounded border-purple-400"
                                  style={{ aspectRatio: item.aspectRatio }}
                                ></div>
                              </section>

                              <span>
                                {item.name} - {item.width}x{item.height}
                              </span>
                            </article>
                          </SelectItem>
                        )}
                      />
                    </SelectGroup>
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
