import { useMemo, useState } from "react";
import type { Patient } from "../types";
import { SearchInput } from "./SearchInput";
import { StatusBadge } from "./StatusBadge";

interface PatientRosterProps {
  patients: Patient[];
}

function matchesQuery(patient: Patient, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return true;
  }
  return [patient.name, patient.mrn, patient.preferredPhone]
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

export function PatientRoster({ patients }: PatientRosterProps) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">(
    "all",
  );
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const visiblePatients = useMemo(() => {
    return patients.filter((patient) => {
      const statusOk =
        statusFilter === "all" ? true : patient.status === statusFilter;
      return statusOk && matchesQuery(patient, query);
    });
  }, [patients, query, statusFilter]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setSelectedIds(new Set());
  }

  function handleStatusChange(value: "all" | "active" | "inactive") {
    setStatusFilter(value);
    setSelectedIds(new Set());
  }

  function toggleSelected(patientId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(patientId)) {
        next.delete(patientId);
      } else {
        next.add(patientId);
      }
      return next;
    });
  }

  return (
    <div className="panel">
      <div className="toolbar" style={{ padding: "1rem" }}>
        <SearchInput
          id="patient-search"
          label="Search patients"
          value={query}
          onChange={handleQueryChange}
          placeholder="Name, MRN, or phone"
        />
        <div className="field">
          <label htmlFor="patient-status">Chart status</label>
          <select
            id="patient-status"
            value={statusFilter}
            onChange={(event) =>
              handleStatusChange(event.target.value as "all" | "active" | "inactive")
            }
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="selection-bar" role="status">
        <span>
          {visiblePatients.length} shown · {selectedIds.size} selected
        </span>
        <span className="muted">
          Selected charts are used for print packets and reminder calls.
        </span>
      </div>
      <div className="table-wrap">
        <table>
          <caption className="sr-only">Patient roster</caption>
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Name</th>
              <th scope="col">MRN</th>
              <th scope="col">Phone</th>
              <th scope="col">Last visit</th>
              <th scope="col">Balance</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {visiblePatients.map((patient) => {
              const selected = selectedIds.has(patient.id);
              return (
                <tr key={patient.id} aria-selected={selected}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => toggleSelected(patient.id)}
                      aria-label={`Select ${patient.name}`}
                    />
                  </td>
                  <td>{patient.name}</td>
                  <td>{patient.mrn}</td>
                  <td>{patient.preferredPhone}</td>
                  <td>{patient.lastVisit}</td>
                  <td>${patient.balance.toFixed(2)}</td>
                  <td>
                    <StatusBadge status={patient.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
