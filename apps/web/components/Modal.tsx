"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ onClose, children, className = "" }: ModalProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (innerRef.current && !innerRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
    >
      <div ref={innerRef} className={className}>
        {children}
      </div>
    </div>
  );
}
