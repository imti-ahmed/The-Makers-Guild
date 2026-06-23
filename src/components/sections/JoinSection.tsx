"use client";

import { Plus } from "@phosphor-icons/react";
import { sounds } from "@/lib/sounds";
import styles from "./JoinSection.module.css";

interface JoinSectionProps {
  onJoin?: () => void;
}

export default function JoinSection({ onJoin }: JoinSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerTitle}>How To Join?</p>
        <Plus size={20} className={styles.headerIcon} />
      </div>

      <div className={styles.content}>
        <p className={styles.bodyText}>
          Submit your site through{" "}
          <button className={styles.formLink} onClick={() => { sounds.click(); onJoin?.(); }} onMouseEnter={() => sounds.hover()}>this form here</button>
          , or open a request on our GitHub. Once approved,{" "}
          <br />
          embed the widget and you&apos;re officially part of the Guild.{" "}
        </p>
        <button className={styles.joinBtn} onClick={() => { sounds.click(); onJoin?.(); }} onMouseEnter={() => sounds.hover()}>
          <span className={styles.joinBtnText}>Join The Guild</span>
          <svg width="17" height="17" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M7 7V10.5H3.5V7H7Z" />
            <path d="M3.5 7V10.5H0V7H3.5Z" />
            <path d="M5.25 3.5V7H1.75V3.5H5.25Z" />
            <path d="M8.75 0V3.5H5.25V0H8.75Z" />
            <path d="M12.25 3.5V7H8.75V3.5H12.25Z" />
            <path d="M8.75 10.5V14H5.25V10.5H8.75Z" />
            <path d="M10.5 7V10.5H7V7H10.5Z" />
            <path d="M14 7V10.5H10.5V7H14Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
