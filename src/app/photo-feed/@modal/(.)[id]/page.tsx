"use client";

import Image from "next/image";
import Modal from "@/components/modal";
import { use } from "react"; // ✅ Import use() from React
import { useState } from "react";
import wondersImages from "../../wonders";

export default function Photo({ params }: { params: Promise<{ id: string }> }) {
  const [isLoaded, setIsLoaded] = useState(false); // ✅ Always at the top level
  const { id } = use(params); // ✅ Unwrap params using use()

  const photo = wondersImages.find((wonder) => wonder.id === id);
  if (!photo) return <p>Photo not found</p>;

  return (
    <Modal>
      <main className="flex h-screen flex-col items-center justify-center p-4">
        <div className="border-6 border-white bg-white pb-6 shadow-lg">
          <div className="relative h-[70vh] w-[90vw] max-w-xl bg-black">
            {/* Low-quality placeholder image */}
            <Image
              src={photo.src}
              alt={photo.name}
              layout="fill"
              objectFit="contain"
              quality={10} // Low quality for fast load
              className={`absolute top-0 left-0 transition-opacity duration-500 ${
                isLoaded ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* High-quality image */}
            <Image
              src={photo.src}
              alt={photo.name}
              layout="fill"
              objectFit="contain"
              priority
              quality={90} // High quality
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              loading="eager"
              className={`absolute top-0 left-0 transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>

          {/* Image Info */}
          <div className="mt-4 px-4 text-center">
            <h1 className="text-xl font-semibold">{photo.name}</h1>
            <p className="text-sm text-gray-600">{photo.photographer}</p>
            <p className="text-sm text-gray-500">{photo.location}</p>
          </div>
        </div>
      </main>
    </Modal>
  );
}
