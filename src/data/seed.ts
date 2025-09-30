import type {
  Appointment,
  Patient,
  Provider,
  WaitlistEntry,
} from "../types";

export const CLINIC_NAME = "Rivermark Family Clinic";
export const CLINIC_TODAY = "2026-08-17";

export const providers: Provider[] = [
  {
    id: "prov-ellison",
    name: "Dr. Mara Ellison",
    role: "physician",
    specialty: "Family medicine",
    rooms: ["A2", "A3"],
  },
  {
    id: "prov-cho",
    name: "Dr. Julian Cho",
    role: "physician",
    specialty: "Pediatrics",
    rooms: ["B1"],
  },
  {
    id: "prov-shah",
    name: "Priya Shah, NP",
    role: "np",
    specialty: "Urgent care",
    rooms: ["C4"],
  },
  {
    id: "prov-ortega",
    name: "Luis Ortega, PA",
    role: "pa",
    specialty: "Family medicine",
    rooms: ["A1"],
  },
  {
    id: "prov-briggs",
    name: "Hannah Briggs, RN",
    role: "rn",
    specialty: "Triage",
    rooms: ["Triage"],
  },
];

export const patients: Patient[] = [
  {
    id: "pat-01",
    name: "Elena Voss",
    dateOfBirth: "1979-04-12",
    mrn: "RM-10482",
    preferredPhone: "555-0142",
    status: "active",
    lastVisit: "2026-07-09",
    balance: 0,
  },
  {
    id: "pat-02",
    name: "Noah Calder",
    dateOfBirth: "2018-11-03",
    mrn: "RM-11820",
    preferredPhone: "555-0194",
    status: "active",
    lastVisit: "2026-08-02",
    balance: 40,
  },
  {
    id: "pat-03",
    name: "Beatrice Holm",
    dateOfBirth: "1946-01-28",
    mrn: "RM-09011",
    preferredPhone: "555-0118",
    status: "active",
    lastVisit: "2026-06-21",
    balance: 125,
  },
  {
    id: "pat-04",
    name: "Samir Haddad",
    dateOfBirth: "1992-08-16",
    mrn: "RM-12204",
    preferredPhone: "555-0177",
    status: "active",
    lastVisit: "2026-05-14",
    balance: 0,
  },
  {
    id: "pat-05",
    name: "Lila Nguyen",
    dateOfBirth: "2001-02-09",
    mrn: "RM-13067",
    preferredPhone: "555-0160",
    status: "active",
    lastVisit: "2026-08-10",
    balance: 15,
  },
  {
    id: "pat-06",
    name: "Owen Pratt",
    dateOfBirth: "1968-09-30",
    mrn: "RM-08744",
    preferredPhone: "555-0129",
    status: "inactive",
    lastVisit: "2025-12-04",
    balance: 0,
  },
  {
    id: "pat-07",
    name: "Marisol Vega",
    dateOfBirth: "1985-06-22",
    mrn: "RM-11503",
    preferredPhone: "555-0188",
    status: "active",
    lastVisit: "2026-07-28",
    balance: 60,
  },
  {
    id: "pat-08",
    name: "Theo Lindqvist",
    dateOfBirth: "2014-03-17",
    mrn: "RM-10991",
    preferredPhone: "555-0133",
    status: "active",
    lastVisit: "2026-04-19",
    balance: 0,
  },
  {
    id: "pat-09",
    name: "Ruthie Callahan",
    dateOfBirth: "1959-12-05",
    mrn: "RM-07820",
    preferredPhone: "555-0151",
    status: "active",
    lastVisit: "2026-08-03",
    balance: 210,
  },
  {
    id: "pat-10",
    name: "Jonah Reeve",
    dateOfBirth: "1998-07-01",
    mrn: "RM-12640",
    preferredPhone: "555-0104",
    status: "active",
    lastVisit: "2026-03-11",
    balance: 0,
  },
  {
    id: "pat-11",
    name: "Amina Farouk",
    dateOfBirth: "1973-10-25",
    mrn: "RM-10116",
    preferredPhone: "555-0199",
    status: "active",
    lastVisit: "2026-07-16",
    balance: 35,
  },
  {
    id: "pat-12",
    name: "Peter Solis",
    dateOfBirth: "1961-05-08",
    mrn: "RM-08459",
    preferredPhone: "555-0122",
    status: "inactive",
    lastVisit: "2025-09-30",
    balance: 80,
  },
];

const LONG_NOTE_VOSS =
  "Follow-up for hypertension and seasonal allergies. Home readings over the last two weeks range from 128/78 to 146/88, with spikes after late dinners. Continue lisinopril 10 mg daily. Patient reports morning congestion and interrupted sleep when mowing. Reviewed nasal rinse technique and advised to hold outdoor work until after 10 a.m. Labs drawn last month were unremarkable. Recheck blood pressure in six weeks and call if systolic readings stay above 150.";

const LONG_NOTE_HOLM =
  "Annual wellness visit. Patient describes increasing fatigue after lunch and occasional lightheaded spells when standing from a chair. Medication list reviewed: metformin, atorvastatin, and a recently added sleep aid from an outside clinic. Discussed fall risk at home, especially on the back steps. Diabetic foot exam intact. Referral to physical therapy for balance work. Daughter will attend the next visit to help with the after-visit summary.";

const LONG_NOTE_VEGA =
  "Acute visit for right-sided migraine that started after a weekend of night shifts. Photophobia and nausea, no fever, no neck stiffness. Last similar episode was in March and resolved with rest plus the rescue triptan. Blood pressure today 138/82. Advised hydration, a dark room for the afternoon, and to avoid driving until the visual aura fully clears. If symptoms last beyond 24 hours or weakness appears, go to urgent care.";

export const appointments: Appointment[] = [
  {
    id: "apt-01",
    patientId: "pat-01",
    providerId: "prov-ellison",
    date: CLINIC_TODAY,
    startTime: "08:30",
    durationMinutes: 30,
    visitType: "follow-up",
    status: "checked-in",
    room: "A2",
    reason: "Blood pressure recheck",
    note: LONG_NOTE_VOSS,
  },
  {
    id: "apt-02",
    patientId: "pat-02",
    providerId: "prov-cho",
    date: CLINIC_TODAY,
    startTime: "08:45",
    durationMinutes: 20,
    visitType: "wellness",
    status: "in-room",
    room: "B1",
    reason: "Four-year well child",
    note: "Vaccines due. Parent asks about preschool forms.",
  },
  {
    id: "apt-03",
    patientId: "pat-03",
    providerId: "prov-ellison",
    date: CLINIC_TODAY,
    startTime: "09:15",
    durationMinutes: 40,
    visitType: "wellness",
    status: "scheduled",
    room: "A3",
    reason: "Annual wellness",
    note: LONG_NOTE_HOLM,
  },
  {
    id: "apt-04",
    patientId: "pat-04",
    providerId: "prov-shah",
    date: CLINIC_TODAY,
    startTime: "09:30",
    durationMinutes: 20,
    visitType: "acute",
    status: "scheduled",
    room: "C4",
    reason: "Sore throat",
    note: "Onset two days ago. No cough. Rapid strep pending.",
  },
  {
    id: "apt-05",
    patientId: "pat-05",
    providerId: "prov-ortega",
    date: CLINIC_TODAY,
    startTime: "10:00",
    durationMinutes: 30,
    visitType: "follow-up",
    status: "scheduled",
    room: "A1",
    reason: "Asthma plan review",
    note: "Peak flows improved after inhaler technique coaching last visit.",
  },
  {
    id: "apt-06",
    patientId: "pat-07",
    providerId: "prov-shah",
    date: CLINIC_TODAY,
    startTime: "10:20",
    durationMinutes: 25,
    visitType: "acute",
    status: "checked-in",
    room: "C4",
    reason: "Migraine",
    note: LONG_NOTE_VEGA,
  },
  {
    id: "apt-07",
    patientId: "pat-08",
    providerId: "prov-cho",
    date: CLINIC_TODAY,
    startTime: "11:00",
    durationMinutes: 20,
    visitType: "follow-up",
    status: "scheduled",
    room: "B1",
    reason: "ADHD check-in",
    note: "Teacher report still outstanding. Appetite stable.",
  },
  {
    id: "apt-08",
    patientId: "pat-09",
    providerId: "prov-ellison",
    date: CLINIC_TODAY,
    startTime: "11:30",
    durationMinutes: 30,
    visitType: "procedure",
    status: "scheduled",
    room: "A2",
    reason: "Joint injection consult",
    note: "Left knee pain worse on stairs. Imaging from March on file.",
  },
  {
    id: "apt-09",
    patientId: "pat-10",
    providerId: "prov-ortega",
    date: CLINIC_TODAY,
    startTime: "13:00",
    durationMinutes: 40,
    visitType: "new-patient",
    status: "scheduled",
    room: "A1",
    reason: "Establish care",
    note: "Recently moved from out of state. Needs records transfer.",
  },
  {
    id: "apt-10",
    patientId: "pat-11",
    providerId: "prov-ellison",
    date: CLINIC_TODAY,
    startTime: "14:00",
    durationMinutes: 30,
    visitType: "follow-up",
    status: "scheduled",
    room: "A3",
    reason: "Thyroid labs review",
    note: "TSH pending from last Thursday. Energy improved.",
  },
  {
    id: "apt-11",
    patientId: "pat-04",
    providerId: "prov-briggs",
    date: CLINIC_TODAY,
    startTime: "08:10",
    durationMinutes: 10,
    visitType: "acute",
    status: "complete",
    room: "Triage",
    reason: "Nurse screening",
    note: "Temp 99.1. Rapid strep collected.",
  },
  {
    id: "apt-12",
    patientId: "pat-01",
    providerId: "prov-ellison",
    date: "2026-08-18",
    startTime: "09:00",
    durationMinutes: 20,
    visitType: "follow-up",
    status: "scheduled",
    room: "A2",
    reason: "Nurse blood pressure only",
    note: "Short visit if home log stays under 140.",
  },
  {
    id: "apt-13",
    patientId: "pat-06",
    providerId: "prov-ortega",
    date: "2026-08-16",
    startTime: "15:30",
    durationMinutes: 20,
    visitType: "follow-up",
    status: "no-show",
    room: "A1",
    reason: "Lipid review",
    note: "Did not arrive. Front desk left a voicemail.",
  },
];

export const waitlist: WaitlistEntry[] = [
  {
    id: "wait-01",
    patientId: "pat-05",
    requestedDate: CLINIC_TODAY,
    visitType: "acute",
    reason: "Same-day slot for inhaler refill if a cancellation opens",
    createdAt: "2026-08-17T07:40:00",
  },
  {
    id: "wait-02",
    patientId: "pat-10",
    requestedDate: "2026-08-18",
    visitType: "follow-up",
    reason: "Wants earlier than the 1 p.m. new-patient slot if possible",
    createdAt: "2026-08-16T16:12:00",
  },
  {
    id: "wait-03",
    patientId: "pat-12",
    requestedDate: "2026-08-19",
    visitType: "follow-up",
    reason: "Reactivate chart and review unpaid balance before booking",
    createdAt: "2026-08-15T11:05:00",
  },
  {
    id: "wait-04",
    patientId: "pat-08",
    requestedDate: CLINIC_TODAY,
    visitType: "wellness",
    reason: "Sibling also needs forms signed this week",
    createdAt: "2026-08-17T08:02:00",
  },
];

export function getPatient(id: string): Patient | undefined {
  return patients.find((patient) => patient.id === id);
}

export function getProvider(id: string): Provider | undefined {
  return providers.find((provider) => provider.id === id);
}

export function shiftDate(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const next = new Date(Date.UTC(year ?? 2026, (month ?? 1) - 1, day ?? 1));
  next.setUTCDate(next.getUTCDate() + days);
  return next.toISOString().slice(0, 10);
}

export function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year ?? 2026, (month ?? 1) - 1, day ?? 1));
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}
