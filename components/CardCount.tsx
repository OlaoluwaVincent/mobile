import { cn } from "@/lib/utils";
import React from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

type Props = {
  title: string;
  count: string | number;
  className?: string;
  bold?: boolean;
};

export default function CardCount({ bold, className, count, title }: Props) {
  return (
    <ThemedView className={cn(["-gap-1", className])}>
      <ThemedText type="title">{count}</ThemedText>
      <ThemedText type="subtitle" className={cn(!bold ? "font-normal" : "")}>
        {title}
      </ThemedText>
    </ThemedView>
  );
}
