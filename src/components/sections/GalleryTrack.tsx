"use client";

import { useState } from "react";
import styles from "./GallerySection.module.css";

interface Item {
  src: string;
  name: string;
  slug: string;
}

export default function GalleryTrack({ items }: { items: Item[] }) {
  const [paused, setPaused] = useState(false);
  const [reversed, setReversed] = useState(false);

  function handleMouseEnter() {
    setPaused(true);
  }

  function handleMouseLeave() {
    setReversed(r => !r);
    setPaused(false);
  }

  return (
    <div
      className={styles.track}
      style={{
        animationPlayState: paused ? "paused" : "running",
        animationDirection: reversed ? "reverse" : "normal",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, i) => (
        <div key={i} className={styles.imageItem}>
          <img src={item.src} alt={item.name} />
        </div>
      ))}
    </div>
  );
}
