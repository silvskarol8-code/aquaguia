export function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <div className={`${className} relative grid place-items-center rounded-2xl bg-gradient-to-br from-aqua-500 to-teal-500 text-white shadow-glow`}>
      <svg viewBox="0 0 48 48" className="h-2/3 w-2/3" fill="none" aria-hidden="true">
        <path
          d="M10 24c5-7 13-7 18-3 2.5-2.5 7-4 10-4-2.5 2.5-3.3 5-3.3 7 0 2 0.8 4.5 3.3 7-3 0-7.5-1.5-10-4-5 4-13 4-18-3z"
          fill="currentColor"
        />
        <circle cx="15" cy="22" r="1.8" fill="#0a6690" />
        <path d="M36 22c1.6 0.8 1.6 2.4 0 3.2" stroke="#1ba6a0" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
