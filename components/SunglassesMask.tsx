type Props = {
  className?: string;
  left?: string; // left lens tone
  right?: string; // right lens tone
  frame?: string; // cushion frame tone
  idSuffix?: string;
};

// The MVP product: a sleep mask in the silhouette of sunglasses, two-tone.
export function SunglassesMask({
  className = "",
  left = "#9AA6D6",
  right = "#F3B48A",
  frame = "#FBF8F1",
  idSuffix = "a",
}: Props) {
  const lg = `lg-${idSuffix}`;
  const rg = `rg-${idSuffix}`;
  const sh = `sh-${idSuffix}`;
  return (
    <svg
      viewBox="0 0 560 340"
      className={className}
      role="img"
      aria-label="imasque two-tone sunglasses-shaped eye mask"
    >
      <defs>
        <linearGradient id={lg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={left} stopOpacity="0.95" />
          <stop offset="1" stopColor={left} stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={rg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={right} stopOpacity="0.95" />
          <stop offset="1" stopColor={right} stopOpacity="0.7" />
        </linearGradient>
        <filter id={sh} x="-30%" y="-30%" width="160%" height="170%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="14" />
          <feOffset dy="18" result="o" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.22" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* soft cast shadow */}
      <ellipse cx="280" cy="300" rx="190" ry="22" fill="#6E78B8" opacity="0.14" />

      <g filter={`url(#${sh})`}>
        {/* strap */}
        <path
          d="M70 168 C 30 168 10 172 0 176 L 0 196 C 18 188 44 190 84 192"
          fill={frame}
          opacity="0.9"
        />
        <path
          d="M490 168 C 530 168 550 172 560 176 L 560 196 C 542 188 516 190 476 192"
          fill={frame}
          opacity="0.9"
        />

        {/* cushion frame */}
        <rect
          x="44"
          y="74"
          width="472"
          height="190"
          rx="92"
          fill={frame}
        />

        {/* left lens */}
        <rect x="74" y="100" width="180" height="140" rx="62" fill={`url(#${lg})`} />
        {/* right lens */}
        <rect x="306" y="100" width="180" height="140" rx="62" fill={`url(#${rg})`} />

        {/* bridge */}
        <path
          d="M254 150 C 268 138 292 138 306 150 L 306 176 C 292 166 268 166 254 176 Z"
          fill={frame}
        />

        {/* soft highlights */}
        <ellipse cx="120" cy="138" rx="34" ry="20" fill="#FBF8F1" opacity="0.35" />
        <ellipse cx="352" cy="138" rx="34" ry="20" fill="#FBF8F1" opacity="0.35" />
      </g>
    </svg>
  );
}
