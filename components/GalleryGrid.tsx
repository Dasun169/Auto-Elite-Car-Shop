"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800",
    title: "Modern Workshop",
    category: "Facility",
  },
  {
    id: 2,
    url: "https://tse1.mm.bing.net/th/id/OIP.JcFZmLBPCFkPPbBKwyO1hgHaEL?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Engine Repair",
    category: "Services",
  },
  {
    id: 3,
    url: "https://1.bp.blogspot.com/-Cy2_084I5WM/XxbTSKnWzjI/AAAAAAAAADQ/oY8Os9Bi2rozuLbvwd1rT6ZdyjqEr35SwCLcBGAsYHQ/s1600/Car%2BService%2BBridgnorth.jpg",
    title: "Luxury Car Service",
    category: "Services",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800",
    title: "Car Detailing",
    category: "Services",
  },
  {
    id: 5,
    url: "https://www.supreme-auto.ca/alignment-002/",
    title: "Wheel Alignment",
    category: "Services",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800",
    title: "Professional Team",
    category: "Team",
  },
  {
    id: 7,
    url: "https://th.bing.com/th/id/R.68d691f1d4043d7d476e9c0d43c35535?rik=fsGKebKxMWHUdg&pid=ImgRaw&r=0",
    title: "Before & After",
    category: "Detailing",
  },
  {
    id: 8,
    url: "https://tse2.mm.bing.net/th/id/OIP.hQbgETPFV9jzjmeFbhiirgHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Diagnostics",
    category: "Services",
  },
  {
    id: 9,
    url: "https://static.vecteezy.com/system/resources/previews/029/563/005/non_2x/an-image-of-all-the-different-parts-that-are-used-in-cars-free-photo.jpg",
    title: "Quality Parts",
    category: "Parts",
  },
];

const categories = [
  "All",
  "Facility",
  "Services",
  "Team",
  "Detailing",
  "Parts",
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-accent text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer card-hover"
            onClick={() => openLightbox(image.id)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold">{image.title}</h3>
                <p className="text-gray-300 text-sm">{image.category}</p>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
                <Maximize2 className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative max-w-4xl max-h-[80vh]">
            <img
              src={filteredImages.find((img) => img.id === selectedImage)?.url}
              alt="Lightbox view"
              className="max-h-[70vh] w-auto object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">
                {filteredImages.find((img) => img.id === selectedImage)?.title}
              </h3>
              <p className="text-gray-300">
                {
                  filteredImages.find((img) => img.id === selectedImage)
                    ?.category
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
