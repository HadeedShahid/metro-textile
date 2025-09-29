"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBy = () => {
  return (
    <Select defaultValue="latest">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="latest">Latest</SelectItem>
        <SelectItem value="oldest">Oldest</SelectItem>
        <SelectItem value="price-low-high">Price: Low → High</SelectItem>
        <SelectItem value="price-high-low">Price: High → Low</SelectItem>
        <SelectItem value="a-z">A → Z</SelectItem>
        <SelectItem value="z-a">Z → A</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortBy;
