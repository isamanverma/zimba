"use client";

import Image, { ImageProps } from "next/image";

import { use } from "react";
import wondersImages from "../wonders";

export default function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const photo = wondersImages.find((p) => p.id === id);

  if (!photo) {
    return (
      <p className="flex h-screen items-center justify-center">
        Photo not found
      </p>
    );
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white text-black">
      {/* Image Container */}
      <div className="relative h-[80vh] w-full max-w-5xl">
        <Image
          src={photo.src as ImageProps["src"]}
          alt={photo.name}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Photo Details */}
      <div className="mt-4 text-center">
        <h1 className="text-3xl font-bold">{photo.name}</h1>
        <p className="mt-1 text-base text-gray-600">By {photo.photographer}</p>
        <p className="text-base text-gray-600">{photo.location}</p>
      </div>
    </div>
  );
}
