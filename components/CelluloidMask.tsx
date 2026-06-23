type Props = {
  className?: string;
  idSuffix?: string;
};

export function CelluloidMask({ className = "", idSuffix = "celluloid" }: Props) {
  const tortoise = `tortoise-${idSuffix}`;
  const cream = `cream-${idSuffix}`;
  const shadow = `cell-shadow-${idSuffix}`;
  const fabric = `fabric-${idSuffix}`;

  return (
    <svg
      viewBox="0 0 720 430"
      className={className}
      role="img"
      aria-label="imasque Celluloid tortoiseshell sunglasses-shaped sleep mask"
    >
      <defs>
        <linearGradient id={cream} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF7E9" />
          <stop offset="0.52" stopColor="#EFD9B8" />
          <stop offset="1" stopColor="#CFA77A" />
        </linearGradient>
        <pattern id={tortoise} width="120" height="86" patternUnits="userSpaceOnUse">
          <rect width="120" height="86" fill="#D7A45C" />
          <path d="M-18 26 C 16 -2 44 4 66 34 C 80 52 104 52 134 26 L134 88 L-18 88 Z" fill="#7A421F" opacity="0.32" />
          <path d="M16 0 C 46 12 54 34 40 60 C 30 76 10 82 -8 70 L-8 0 Z" fill="#FFF0C7" opacity="0.35" />
          <path d="M70 -10 C 116 0 128 34 98 56 C 76 72 68 54 54 34 C 44 18 50 2 70 -10 Z" fill="#3E2113" opacity="0.22" />
          <path d="M22 48 C 38 34 60 38 72 56 C 84 72 72 88 48 88 C 24 88 4 66 22 48 Z" fill="#B8692F" opacity="0.55" />
        </pattern>
        <pattern id={fabric} width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="transparent" />
          <path d="M0 3 H16 M0 11 H16" stroke="#B8895A" strokeOpacity="0.18" strokeWidth="1" />
          <path d="M4 0 V16 M12 0 V16" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1" />
        </pattern>
        <filter id={shadow} x="-20%" y="-30%" width="140%" height="170%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="16" />
          <feOffset dy="24" result="offset" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="360" cy="365" rx="235" ry="27" fill="#4D2A18" opacity="0.15" />

      <g filter={`url(#${shadow})`}>
        <path
          d="M111 220 C 60 205 26 211 8 236"
          fill="none"
          stroke="#4B2B1E"
          strokeWidth="15"
          strokeLinecap="round"
          opacity="0.92"
        />
        <path
          d="M609 220 C 660 205 694 211 712 236"
          fill="none"
          stroke="#4B2B1E"
          strokeWidth="15"
          strokeLinecap="round"
          opacity="0.92"
        />
        <circle cx="73" cy="218" r="13" fill="#8A5A36" />
        <circle cx="647" cy="218" r="13" fill="#8A5A36" />

        <path
          d="M94 146 C 104 84 150 57 225 61 L 286 65 C 324 68 336 93 333 135 L 330 207 C 327 258 297 282 241 286 L 162 291 C 99 295 66 263 75 203 Z"
          fill={`url(#${tortoise})`}
          stroke="#57301C"
          strokeWidth="5"
        />
        <path
          d="M627 146 C 616 84 570 57 495 61 L 434 65 C 396 68 384 93 387 135 L 390 207 C 393 258 423 282 479 286 L 558 291 C 621 295 654 263 645 203 Z"
          fill={`url(#${tortoise})`}
          stroke="#57301C"
          strokeWidth="5"
        />
        <path
          d="M329 139 C 346 122 374 122 391 139 L 393 174 C 373 162 347 162 327 174 Z"
          fill={`url(#${tortoise})`}
          stroke="#57301C"
          strokeWidth="4"
        />

        <path
          d="M124 162 C 132 121 163 102 219 105 L 262 108 C 287 110 296 126 294 155 L 292 199 C 290 235 270 251 231 254 L 174 258 C 130 261 106 239 112 196 Z"
          fill={`url(#${cream})`}
        />
        <path
          d="M596 162 C 588 121 557 102 501 105 L 458 108 C 433 110 424 126 426 155 L 428 199 C 430 235 450 251 489 254 L 546 258 C 590 261 614 239 608 196 Z"
          fill={`url(#${cream})`}
        />
        <path
          d="M124 162 C 132 121 163 102 219 105 L 262 108 C 287 110 296 126 294 155 L 292 199 C 290 235 270 251 231 254 L 174 258 C 130 261 106 239 112 196 Z"
          fill={`url(#${fabric})`}
        />
        <path
          d="M596 162 C 588 121 557 102 501 105 L 458 108 C 433 110 424 126 426 155 L 428 199 C 430 235 450 251 489 254 L 546 258 C 590 261 614 239 608 196 Z"
          fill={`url(#${fabric})`}
        />

        <path
          d="M154 119 C 190 96 240 98 272 118"
          stroke="#FFF4D8"
          strokeWidth="13"
          strokeLinecap="round"
          opacity="0.23"
        />
        <path
          d="M448 119 C 484 96 534 98 566 118"
          stroke="#FFF4D8"
          strokeWidth="13"
          strokeLinecap="round"
          opacity="0.23"
        />
      </g>

      <g transform="translate(114 333)">
        <rect x="0" y="0" width="150" height="54" rx="27" fill="#B98B62" opacity="0.24" />
        <text x="28" y="34" fill="#5B3220" fontSize="16" fontFamily="serif" letterSpacing="1.5">
          Dream More.
        </text>
      </g>
    </svg>
  );
}
