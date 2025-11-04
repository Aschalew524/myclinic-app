import { useState } from "react";

const PREVIEW_LENGTH = 120;

interface PatientNotesProps {
  note: string;
  noteId: string;
}

export function PatientNotes({ note, noteId }: PatientNotesProps) {
  const isLong = note.length > PREVIEW_LENGTH;
  const [expanded, setExpanded] = useState(false);
  const preview = `${note.slice(0, PREVIEW_LENGTH).trim()}…`;

  return (
    <section className="patient-notes" aria-labelledby={`${noteId}-label`}>
      <h3 id={`${noteId}-label`} className="patient-notes__label">
        Clinical note
      </h3>
      <p className="patient-notes__text" data-testid={`${noteId}-text`}>
        {isLong ? preview : note}
      </p>
      {isLong ? (
        <button
          type="button"
          className="text-button"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      ) : null}
    </section>
  );
}
