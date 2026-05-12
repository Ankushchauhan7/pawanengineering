"use client";

interface Props {
  searchQuery: string;
  onSearchChange: (v: string) => void;
  searchPlaceholder?: string;
  types: string[];
  activeType: string;
  onTypeChange: (t: string) => void;
  resultCount: number;
  activeCategory?: string;
  accentColor?: "blue" | "amber";
}

const FOCUS_RING = {
  blue:  "focus:ring-blue-500/30 focus:border-blue-400",
  amber: "focus:ring-amber-500/30 focus:border-amber-400",
};
const ACTIVE_BTN = {
  blue:  "bg-blue-600 text-white shadow-sm",
  amber: "bg-amber-500 text-white shadow-sm",
};

export default function OTToolbar({
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Search…",
  types,
  activeType,
  onTypeChange,
  resultCount,
  activeCategory,
  accentColor = "blue",
}: Props) {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">

        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
          </svg>
          <input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className={`w-full border border-slate-200 bg-white rounded-xl pl-9 pr-8 py-2.5 text-sm outline-none focus:ring-2 transition-all ${FOCUS_RING[accentColor]}`}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Type pills */}
        {types.length > 1 && (
          <div className="flex gap-2 flex-wrap">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => onTypeChange(t)}
                className={`text-xs px-4 py-2 rounded-xl font-semibold transition-all ${
                  activeType === t
                    ? ACTIVE_BTN[accentColor]
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-slate-500">
        Showing{" "}
        <span className="font-bold text-slate-800">{resultCount}</span>{" "}
        result{resultCount !== 1 ? "s" : ""}
        {activeCategory && activeCategory !== "All" && (
          <span className={`font-semibold ml-1 ${accentColor === "amber" ? "text-amber-600" : "text-blue-600"}`}>
            · {activeCategory}
          </span>
        )}
      </p>
    </div>
  );
}