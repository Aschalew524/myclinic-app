import type { VisitStatus } from "../types";

const LABELS: Record<VisitStatus | "active" | "inactive", string> = {
  scheduled: "Scheduled",
  "checked-in": "Checked in",
  "in-room": "In room",
  complete: "Complete",
  "no-show": "No show",
  active: "Active",
  inactive: "Inactive",
};

interface StatusBadgeProps {
  status: keyof typeof LABELS;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status status--${status}`}>
      <span className="sr-only">Status: </span>
      {LABELS[status]}
    </span>
  );
}
