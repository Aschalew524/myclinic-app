import type { ReactNode } from "react";
import type { ViewName } from "../types";
import { CLINIC_NAME } from "../data/seed";

const LINKS: { view: ViewName; label: string }[] = [
  { view: "schedule", label: "Schedule" },
  { view: "patients", label: "Patients" },
  { view: "staff", label: "Staff" },
];

interface AppShellProps {
  view: ViewName;
  onViewChange: (view: ViewName) => void;
  children: ReactNode;
}

export function AppShell({ view, onViewChange, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand__mark">{CLINIC_NAME}</span>
          <span className="brand__sub">Front desk board</span>
        </div>
        <nav className="nav" aria-label="Clinic sections">
          {LINKS.map((link) => (
            <button
              key={link.view}
              type="button"
              className="nav__button"
              aria-current={view === link.view ? "page" : undefined}
              onClick={() => onViewChange(link.view)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
