"use client";

import { Plus } from "@phosphor-icons/react";
import { sounds } from "@/lib/sounds";
import styles from "./AuthorSection.module.css";

const SOCIAL_LINKS = [
  { label: "Portfolio", href: "https://www.imtiyazahmed.com/" },
  { label: "Twitter",   href: "https://x.com/imtiahmed01" },
  { label: "Linkedin",  href: "https://www.linkedin.com/in/iamimtiyazahmed/" },
  { label: "Github",    href: "http://github.com/imti-ahmed" },
];

export default function AuthorSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerTitle}>About The Author</p>
        <Plus size={20} className={styles.headerIcon} />
      </div>

      <div className={styles.content}>
        <div className={styles.bodyText}>
          <p>Designed, developed and maintained by Imtiyaz Ahmed.</p>
          <p>
            Find me on{" "}
            {SOCIAL_LINKS.map((link, i) => (
              <span key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.accentLinks}
                  onMouseEnter={() => sounds.hover()}
                  onClick={() => sounds.click()}
                >
                  {link.label}
                </a>
                {i < SOCIAL_LINKS.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
