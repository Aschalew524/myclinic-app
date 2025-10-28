import type { Provider } from "../types";

interface FilterBarProps {
  providerId: string;
  onProviderChange: (providerId: string) => void;
  providers: Provider[];
  dateLabel: string;
  onPreviousDay: () => void;
  onNextDay: () => void;
  onToday: () => void;
}

export function FilterBar({
  providerId,
  onProviderChange,
  providers,
  dateLabel,
  onPreviousDay,
  onNextDay,
  onToday,
}: FilterBarProps) {
  return (
    <div className="toolbar" role="group" aria-label="Schedule filters">
      <div className="field">
        <span id="schedule-day-label">Day</span>
        <div>
          <button type="button" className="ghost-button" onClick={onPreviousDay}>
            Previous day
          </button>{" "}
          <button type="button" className="ghost-button" onClick={onToday}>
            Today
          </button>{" "}
          <button type="button" className="ghost-button" onClick={onNextDay}>
            Next day
          </button>
        </div>
        <strong aria-labelledby="schedule-day-label">{dateLabel}</strong>
      </div>
      <div className="field">
        <label htmlFor="provider-filter">Provider</label>
        <select
          id="provider-filter"
          value={providerId}
          onChange={(event) => onProviderChange(event.target.value)}
        >
          <option value="all">All providers</option>
          {providers.map((provider) => (
            <option key={provider.id} value={provider.id}>
              {provider.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
