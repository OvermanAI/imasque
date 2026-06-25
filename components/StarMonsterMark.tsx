export function StarMonsterMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className={className}>
      <path
        d="M58 8c8 6 10 17 19 20 10 3 20-2 27 5 6 8 0 18 4 27 4 9 14 13 12 23-2 10-14 12-20 20-6 8-4 20-14 24-10 4-18-6-28-6s-18 10-28 6c-10-4-8-16-14-24-6-8-18-10-20-20-2-10 8-14 12-23 4-9-2-19 4-27 7-7 17-2 27-5 9-3 11-14 19-20Z"
        fill="currentColor"
        stroke="#080808"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M35 22 27 5 45 16" fill="#FF1F0F" stroke="#080808" strokeWidth="5" strokeLinejoin="round" />
      <path d="M81 16 99 5 91 22" fill="#FF1F0F" stroke="#080808" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="43" cy="57" r="5" fill="#080808" />
      <circle cx="78" cy="57" r="5" fill="#080808" />
      <path d="m51 78 18-18M69 78 51 60" stroke="#080808" strokeWidth="5" strokeLinecap="round" />
      <path d="M13 66c-12 0-18-18-4-25 10-5 18 5 20 14" fill="#FFF6F7" stroke="#080808" strokeWidth="4" />
      <path d="M107 66c12 0 18-18 4-25-10-5-18 5-20 14" fill="#FFF6F7" stroke="#080808" strokeWidth="4" />
    </svg>
  );
}
