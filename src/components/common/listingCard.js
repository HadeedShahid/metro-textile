import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Eye,
  ShoppingCart,
  ExternalLink,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function ProductCard({ name, category, image, badges = [] }) {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-smooth py-0 gap-0">
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-md"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-md"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <Badge variant="category" className="text-xs">
          {category}
        </Badge>

        <h3 className="font-semibold text-metal-primary group-hover:text-metal-secondary transition-colors">
          {name}
        </h3>

        <div className="flex gap-2 w-full">
          <Button className={"flex-1"}>
            <Phone className="h-3 w-3 " />
            Call
          </Button>
          <Button className={"flex-1"}>
            <Mail className="h-3 w-3 " />
            Email
          </Button>

          <Button variant={"outline"} className={"mr-0 ml-auto"}>
            <ExternalLink className="h-3 w-3 " />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
