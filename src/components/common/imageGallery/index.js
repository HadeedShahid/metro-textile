"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  {
    id: 1,
    src: "/sample.jpg",
    alt: "Mountain landscape",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    alt: "Forest path",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
    alt: "Sunset over hills",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
    alt: "Lake reflection",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop",
    alt: "Flower field",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    alt: "Northern lights",
  },
];

export default function GalleryGrid() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: selectedIndex,
  });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const openGallery = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi && isOpen) {
      emblaApi.scrollTo(selectedIndex);
    }
  }, [emblaApi, isOpen, selectedIndex]);

  return (
    <div className="min-h-screen">
      <div className="w-full">
        {/* CSS Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:grid-rows-2 gap-4 h-[400px] md:h-[500px]">
          {/* Main Image */}
          <div
            className="relative md:row-span-2 rounded-lg overflow-hidden cursor-pointer group border border-white/10"
            onClick={() => openGallery(0)}
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          {/* Top Right */}
          <div
            className="hidden md:block relative rounded-lg overflow-hidden cursor-pointer group border border-white/10"
            onClick={() => openGallery(1)}
          >
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
              sizes="33vw"
            />
          </div>

          {/* Bottom Right */}
          <div
            className="hidden md:block relative rounded-lg overflow-hidden cursor-pointer group border border-white/10"
            onClick={() => openGallery(2)}
          >
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
              sizes="33vw"
            />
            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1.5 rounded-md text-sm font-medium border border-white/20">
              +{images.length - 3} more
            </div>
          </div>
        </div>

        {/* Thumbnail Strip - Mobile */}
        <div className="mt-4 block md:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openGallery(index)}
                className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden hover:opacity-80 transition-opacity border border-white/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Full Gallery Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col text-white">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-md border border-white/20 bg-black/80 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Carousel */}
            <div className="flex-1 flex items-center justify-center p-4 relative">
              <div
                className="w-full max-w-5xl overflow-hidden rounded-lg"
                ref={emblaRef}
              >
                <div className="flex rounded-lg">
                  {images.map((image) => (
                    <div
                      key={image.id}
                      className="flex-[0_0_100%] min-w-0 px-2 rounded-lg"
                    >
                      <div className="relative w-full h-[50vh] md:h-[70vh]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover rounded-lg"
                          sizes="100vw"
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-2 md:left-4 p-2 md:p-3 rounded-md border border-white/20 bg-black/80 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-2 md:right-4 p-2 md:p-3 rounded-md border border-white/20 bg-black/80 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Thumbnail Carousel */}
            <div className="p-4 border-t border-white/10 bg-black/70 backdrop-blur-sm">
              <div
                className="max-w-5xl mx-auto overflow-hidden"
                ref={emblaThumbsRef}
              >
                <div className="flex gap-2">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => onThumbClick(index)}
                      className={`flex-[0_0_80px] md:flex-[0_0_120px] min-w-0 relative rounded-md overflow-hidden transition-all h-16 md:h-20 border-2 ${
                        index === selectedIndex
                          ? "border-white opacity-100"
                          : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80px, 120px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
