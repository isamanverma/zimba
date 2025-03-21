import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import wondersImages from "./wonders";

export const metadata: Metadata = {
  title: "Zimba - Empowering Your Creativity",
  description:
    "Zimba is a platform designed to unleash your creativity. Share stories, poems, and thoughts in a beautifully crafted letter-style format. Connect with like-minded creators and inspire the world with your words.",
};

export default function WondersGallery() {
  return (
    <main>
      <h1 className="py-5 text-center text-7xl font-bold">
        <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
          Photo Gallery
        </span>
        <span> 📸</span>
      </h1>
      <div className="columns-[500px] gap-2 space-y-2 p-4">
        {wondersImages.map(({ id, src, name, blurDataURL }, index) => (
          <Link
            key={id}
            href={`/photo-feed/${id}`}
            className="block break-inside-avoid"
          >
            <Image
              src={src}
              alt={name || "Wonder Image"}
              placeholder="blur"
              blurDataURL={blurDataURL}
              priority={index < 4}
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-auto w-full shadow-lg"
              loading={index > 4 ? "lazy" : "eager"}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
