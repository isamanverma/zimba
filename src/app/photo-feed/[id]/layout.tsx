"use client";

import Image from "next/image";
import { use } from "react";
import wondersImages from "../wonders";

interface LayoutProps {
  params: Promise<{ id: string }>;
}

export default function PhotoPage({ params }: LayoutProps) {
  const { id } = use(params);

  const photo = wondersImages.find((p) => p.id === id);

  if (!photo) {
    return (
      <p className="flex h-screen items-center justify-center">
        Photo not found
      </p>
    );
  }

  const imageLoader = ({ src }: { src: string }) => {
    return src;
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white text-black">
      <div className="relative h-[80vh] w-full max-w-5xl">
        <Image
          src={photo.src}
          alt={photo.name}
          fill
          className="object-cover shadow-lg"
          loader={imageLoader}
        />
      </div>

      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold">{photo.name}</h1>
        <p className="mt-2 text-xl text-gray-600">{photo.photographer}</p>
        <p className="text-sm text-gray-600">{photo.location}</p>
      </div>
    </div>
  );
}
