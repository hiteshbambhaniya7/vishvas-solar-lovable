import { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-deep">
      {children}
    </span>
  );
}
