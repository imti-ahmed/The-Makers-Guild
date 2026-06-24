"use client";

import { useState, useEffect } from "react";
import { Plus } from "@phosphor-icons/react";
import styles from "./MobileHeader.module.css";

const TABS = [
  { label: "About",      id: "about" },
  { label: "Criteria",   id: "criteria" },
  { label: "Join Guild", id: "join" },
  { label: "Members",    id: "members" },
] as const;

export default function MobileHeader() {
  const [activeTab, setActiveTab] = useState<string>("about");

  useEffect(() => {
    const observers = TABS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  function handleTabClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoRow}>
        <span className={styles.siteName}>The Maker Guild Webring</span>
        <Plus size={14} className={styles.logoIcon} />
      </div>
      <nav className={styles.tabRow} aria-label="Page sections">
        {TABS.map(({ label, id }) => (
          <button
            key={id}
            className={`${styles.tab} ${activeTab === id ? styles.tabActive : ""}`}
            onClick={() => handleTabClick(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
