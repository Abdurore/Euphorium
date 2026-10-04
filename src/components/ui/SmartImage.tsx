"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * Eagerly-loaded image with a shimmer skeleton underneath that cross-fades
 * into the picture once it has decoded — no lazy loading, no pop-in.
 * Parent must be `relative` with a fixed size/aspect ratio when using `fill`.
 */
export function SmartImage({ className = "", alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        aria-hidden
        className={`skeleton absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        alt={alt}
        loading="eager"
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
        ref={(img) => {
          if (img?.complete && img.naturalWidth > 0) setLoaded(true);
        }}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </>
  );
}
