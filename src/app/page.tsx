"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Photo data
const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?auto=format&fit=crop&w=1740&q=80",
  },
];

// ✅ Shuffling logic
const shuffleArray = (array: typeof squareData) => {
  return [...array].sort(() => Math.random() - 0.5);
};

// ✅ Main Component
const ShuffleHero = () => {
  return (
    <main className="grid min-h-screen place-items-center">
      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-2">
        <div>
          <span className="mb-4 block text-xs font-medium text-indigo-500 md:text-sm">
            📸 Snap. Scroll. Smile.
          </span>
          <h3 className="text-4xl font-semibold md:text-6xl">
            Zimba Photo Gallery
          </h3>
          <p className="my-4 text-base text-slate-700 md:my-6 md:text-lg">
            A handpicked collection of breathtaking shots, fresh from Unsplash.
            Whether {"you're"} seeking inspo or just love a good scroll,{" "}
            {"we've"}
            got you covered.
          </p>
          <Link href="/photo-feed">
            <button className="rounded bg-indigo-500 px-4 py-2 font-medium text-white transition-all hover:bg-indigo-600 active:scale-95">
              Dive In 🚀
            </button>
          </Link>
        </div>
        <ShuffleGrid />
      </section>
    </main>
  );
};

// ✅ Shuffle Grid Component
const ShuffleGrid = () => {
  const [squares, setSquares] = useState(squareData);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const shuffleSquares = useCallback(() => {
    setSquares(shuffleArray(squareData));

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  }, []);

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shuffleSquares]);

  return (
    <div className="grid h-[450px] grid-cols-4 grid-rows-4 gap-1">
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.2, type: "spring" }}
          className="h-full w-full"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};

export default ShuffleHero;
