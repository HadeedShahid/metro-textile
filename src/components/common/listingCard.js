"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductCard({ data, className }) {
  const { imageSrc, imageAlt, category, title, href } = data;

  return (
    <Link href={href || ""} aria-label={title}>
      <Card
        role="article"
        className={cn(
          "h-full py-0 overflow-hidden rounded-lg shadow-none hover:shadow-md transition-shadow",
          className
        )}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt || title}
          className="object-cover w-full h-80"
          width={500}
          height={250}
        />
        <CardHeader className="">
          <CardDescription className="text-muted-foreground">
            {category}
          </CardDescription>
          <CardTitle className="text-base md:text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0" />
      </Card>
    </Link>
  );
}

export default ProductCard;
