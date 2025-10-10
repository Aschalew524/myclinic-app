import { useState } from "react";
import { AppShell } from "./components/AppShell";
import { SchedulePage } from "./pages/SchedulePage";
import { PatientsPage } from "./pages/PatientsPage";
import { StaffPage } from "./pages/StaffPage";
import type { ViewName } from "./types";

export default function App() {
  const [view, setView] = useState<ViewName>("schedule");

  return (
    <AppShell view={view} onViewChange={setView}>
      {view === "schedule" ? <SchedulePage /> : null}
      {view === "patients" ? <PatientsPage /> : null}
      {view === "staff" ? <StaffPage /> : null}
    </AppShell>
  );
}
