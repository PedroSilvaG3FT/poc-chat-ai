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
import { SelectProps } from "@radix-ui/react-select";
import { ILeonardoPresetStyle } from "@/_shared/interfaces/leonardo-ai.interface";

interface IProps extends SelectProps {
  name: string;
  control: Control<any>;
  styles: ILeonardoPresetStyle[];
}

export default function ImageGenerationSelectStyle(props: IProps) {
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
                <SelectValue placeholder="Styles" />
              </SelectTrigger>

              <SelectContent>
                <Each
                  data={props.styles}
                  render={(item) => (
                    <SelectItem value={item.id}>{item.name}</SelectItem>
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
