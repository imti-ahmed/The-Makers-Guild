"use client";

import { sounds } from "@/lib/sounds";

interface MemberLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function MemberLink({ href, children, className }: MemberLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseEnter={() => sounds.hover()}
      onClick={() => sounds.click()}
    >
      {children}
    </a>
  );
}
