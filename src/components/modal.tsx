"use client";

import { MouseEventHandler, useCallback, useEffect, useRef } from "react";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[3px]"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="relative flex flex-col items-center rounded-lg bg-transparent"
      >
        <div className="relative">
          {children}
          <button
            onClick={onDismiss}
            className="absolute top-24 right-6 z-20 rounded-full bg-white/80 p-0.5 shadow-md hover:bg-white"
          >
            <X size={24} className="text-gray-700 hover:text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
