const common = { viewBox: '0 0 80 80', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': true }

export default function StoreCategoryIcon({ type, className = 'size-16' }) {
  if (type === 'BURGERS') return <svg {...common} className={className}>
    <ellipse cx="40" cy="58" rx="28" ry="5" fill="#221b15" opacity=".25" />
    <path d="M16 39c0-15 10-24 24-24s24 9 24 24H16Z" fill="#D88E40" stroke="#6E422A" strokeWidth="2" />
    <path d="M18 43h44" stroke="#F9D477" strokeWidth="6" strokeLinecap="round" />
    <path d="M16 47c8-4 12 4 20 0s13 4 28 0" stroke="#80A458" strokeWidth="6" strokeLinecap="round" />
    <path d="M17 52h46" stroke="#79412B" strokeWidth="8" strokeLinecap="round" />
    <path d="M20 58c8 5 32 5 40 0" stroke="#D89148" strokeWidth="8" strokeLinecap="round" />
    <circle cx="28" cy="28" r="1.5" fill="#FFF5D4" /><circle cx="39" cy="23" r="1.5" fill="#FFF5D4" /><circle cx="51" cy="29" r="1.5" fill="#FFF5D4" />
  </svg>
  if (type === 'PIZZA') return <svg {...common} className={className}>
    <ellipse cx="41" cy="66" rx="25" ry="5" fill="#221b15" opacity=".25" />
    <path d="M13 19c17-3 38-3 55 2L40 64 13 19Z" fill="#F7C86A" stroke="#9C5B2E" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 19c18-6 40-6 56 2" stroke="#B56D36" strokeWidth="9" strokeLinecap="round" />
    <path d="M25 29c10-2 22-2 32 0L40 55 25 29Z" fill="#F6D986" />
    <circle cx="35" cy="36" r="4" fill="#C5503B" /><circle cx="48" cy="34" r="4" fill="#C5503B" /><circle cx="40" cy="48" r="3.5" fill="#C5503B" />
    <path d="M31 42c2-3 4-3 6-1M46 46c3-2 5-1 6 1" stroke="#6D9A53" strokeWidth="3" strokeLinecap="round" />
  </svg>
  if (type === 'MOMOS') return <svg {...common} className={className}>
    <ellipse cx="40" cy="62" rx="30" ry="6" fill="#221b15" opacity=".25" />
    <path d="M12 53c0-10 5-20 14-23 9 3 14 13 14 23-8 7-20 7-28 0Z" fill="#F3E5C7" stroke="#B89E7D" strokeWidth="2" />
    <path d="M28 52c0-11 6-23 15-26 9 3 15 15 15 26-8 8-22 8-30 0Z" fill="#FFF0D3" stroke="#B89E7D" strokeWidth="2" />
    <path d="M48 54c0-10 5-19 13-22 8 3 12 12 12 22-7 6-18 6-25 0Z" fill="#F4E4C6" stroke="#B89E7D" strokeWidth="2" />
    <path d="M24 32v18m19-21v22m18-16v17" stroke="#D9C6A5" strokeWidth="2" strokeLinecap="round" />
  </svg>
  if (type === 'COFFEE') return <svg {...common} className={className}>
    <ellipse cx="39" cy="63" rx="26" ry="5" fill="#221b15" opacity=".25" />
    <path d="M19 28h38l-4 29H23l-4-29Z" fill="#F7E9D2" stroke="#9C8065" strokeWidth="2" />
    <path d="M57 32h4c10 0 9 17-5 17" stroke="#F7E9D2" strokeWidth="7" strokeLinecap="round" />
    <ellipse cx="38" cy="28" rx="19" ry="5" fill="#9B6541" stroke="#705039" strokeWidth="2" />
    <path d="M32 27c3-4 9-4 12 0-3 4-9 4-12 0Z" fill="#FFF5E3" />
    <path d="M29 17c-3-3 3-5 0-8m10 8c-3-3 3-5 0-8m10 8c-3-3 3-5 0-8" stroke="#D6B796" strokeWidth="2" strokeLinecap="round" />
  </svg>
  if (type === 'FRIES') return <svg {...common} className={className}>
    <ellipse cx="40" cy="66" rx="25" ry="4" fill="#221b15" opacity=".25" />
    <path d="M24 18v29m9-34v34m8-31v32m8-35v35m9-26v26" stroke="#F5CC67" strokeWidth="7" strokeLinecap="round" />
    <path d="M17 38h46l-6 25H23l-6-25Z" fill="#B96642" stroke="#7F4637" strokeWidth="2" strokeLinejoin="round" />
    <path d="M25 43h30" stroke="#EAAE78" strokeWidth="2" strokeLinecap="round" />
  </svg>
  if (type === 'DESSERT') return <svg {...common} className={className}>
    <ellipse cx="40" cy="65" rx="28" ry="5" fill="#221b15" opacity=".25" />
    <path d="M17 55 45 20l21 35H17Z" fill="#F9E6C5" stroke="#B8845A" strokeWidth="2" strokeLinejoin="round" />
    <path d="M17 55h49l-4 8H21l-4-8Z" fill="#A46D47" />
    <path d="M28 42c7 2 17 2 25-2" stroke="#FDF8EC" strokeWidth="7" strokeLinecap="round" />
    <circle cx="45" cy="21" r="5" fill="#C95656" /><circle cx="34" cy="33" r="3" fill="#7B86B5" /><circle cx="54" cy="38" r="3" fill="#7B86B5" />
  </svg>
  if (type === 'ALL') return <svg {...common} className={className}>
    <ellipse cx="40" cy="64" rx="30" ry="5" fill="#221b15" opacity=".25" />
    <path d="M15 55h50M20 53c0-16 8-28 20-28s20 12 20 28H20Z" fill="#F5DEC0" stroke="#9D7959" strokeWidth="2.5" />
    <path d="M35 24c0-6 10-6 10 0" stroke="#D6A66B" strokeWidth="4" strokeLinecap="round" />
    <path d="M19 58h42" stroke="#AE7954" strokeWidth="5" strokeLinecap="round" />
    <path d="M28 38c3-4 7-4 10 0m6 4c3-4 7-4 10 0" stroke="#82A35E" strokeWidth="3" strokeLinecap="round" />
  </svg>
  if (type === 'STARTER') return <svg {...common} className={className}>
    <ellipse cx="40" cy="65" rx="30" ry="5" fill="#221b15" opacity=".25" />
    <ellipse cx="40" cy="45" rx="30" ry="17" fill="#F5E8D4" stroke="#AF9678" strokeWidth="2" />
    <ellipse cx="40" cy="44" rx="22" ry="11" fill="#D8BD90" />
    <circle cx="30" cy="42" r="7" fill="#C67345" /><circle cx="47" cy="44" r="8" fill="#DC9858" />
    <path d="M24 34c3-6 7-7 10-5m11 5c4-6 8-6 11-3M30 53c4-6 6-6 10-4" stroke="#739451" strokeWidth="3" strokeLinecap="round" />
    <circle cx="49" cy="42" r="2" fill="#F7D77E" />
  </svg>
  if (type === 'GRILL SANDWICH') return <svg {...common} className={className}>
    <ellipse cx="40" cy="65" rx="28" ry="5" fill="#221b15" opacity=".25" />
    <path d="M16 52 41 20l22 34-47-2Z" fill="#E6A85E" stroke="#915B38" strokeWidth="2" strokeLinejoin="round" />
    <path d="M20 48 41 24l17 26-38-2Z" fill="#F5D796" />
    <path d="M23 48c13-5 20 7 34 1" stroke="#79A05A" strokeWidth="5" strokeLinecap="round" />
    <path d="M20 54c11-2 28 6 40 0" stroke="#B76045" strokeWidth="4" strokeLinecap="round" />
    <path d="M40 24 39 50" stroke="#A9693F" strokeWidth="2" />
  </svg>
  if (type === 'PASTA') return <svg {...common} className={className}>
    <ellipse cx="40" cy="65" rx="29" ry="5" fill="#221b15" opacity=".25" />
    <path d="M13 45h54l-7 17H20l-7-17Z" fill="#F1E5CF" stroke="#9F896C" strokeWidth="2" />
    <ellipse cx="40" cy="45" rx="27" ry="10" fill="#D9AC67" stroke="#A47A4F" strokeWidth="2" />
    <path d="M20 42c8-12 16 10 24-3 5-8 13 8 18 0M22 48c9-8 13 4 21 1 8-4 11-2 17 1" stroke="#F6D77E" strokeWidth="4" strokeLinecap="round" />
    <circle cx="30" cy="41" r="3" fill="#C8513A" /><circle cx="51" cy="45" r="3" fill="#C8513A" />
    <path d="M37 35c-2-5 2-8 5-9" stroke="#77A05C" strokeWidth="3" strokeLinecap="round" />
  </svg>
  if (type === 'SHAKES') return <svg {...common} className={className}>
    <ellipse cx="40" cy="66" rx="24" ry="4" fill="#221b15" opacity=".25" />
    <path d="M22 27h36l-4 34H26l-4-34Z" fill="#E2B798" stroke="#9C6B59" strokeWidth="2" />
    <path d="M28 32h24l-3 24H31l-3-24Z" fill="#F2D5B5" />
    <path d="M46 28 54 10" stroke="#B96556" strokeWidth="4" strokeLinecap="round" />
    <path d="M26 27c-4-7 0-12 6-10 3-8 11-7 15-2 8-2 12 5 9 12H26Z" fill="#FFF3DC" stroke="#BCA58C" strokeWidth="2" />
    <circle cx="40" cy="14" r="4" fill="#CB5C53" />
  </svg>
  if (type === 'MOCKTAIL') return <svg {...common} className={className}>
    <ellipse cx="40" cy="66" rx="25" ry="4" fill="#221b15" opacity=".25" />
    <path d="M17 24h46L42 52h-4L17 24Z" fill="#A4B9A0" stroke="#6F927B" strokeWidth="2" />
    <path d="M21 28h38L41 49h-2L21 28Z" fill="#91BBAE" />
    <path d="M40 52v11m-12 0h24" stroke="#E7DEC9" strokeWidth="4" strokeLinecap="round" />
    <path d="M49 28 59 12" stroke="#D5A46E" strokeWidth="3" strokeLinecap="round" />
    <circle cx="56" cy="25" r="10" fill="#E6D881" stroke="#A3AA5E" strokeWidth="2" />
    <path d="M56 15v20m-9-10h18" stroke="#F7EDAD" strokeWidth="2" />
  </svg>
  return <svg {...common} className={className}>
    <ellipse cx="40" cy="59" rx="29" ry="7" fill="#221b15" opacity=".25" />
    <ellipse cx="40" cy="45" rx="28" ry="13" fill="#F7E7CB" stroke="#A88967" strokeWidth="2" />
    <ellipse cx="40" cy="43" rx="18" ry="7" fill="#86A35D" />
    <circle cx="33" cy="42" r="4" fill="#D7A762" /><circle cx="46" cy="45" r="4" fill="#D7A762" /><circle cx="42" cy="39" r="3" fill="#C95741" />
    <path d="M16 17v21m-6-18v15m12-15v15M65 18v29" stroke="#D8C0A0" strokeWidth="3" strokeLinecap="round" />
  </svg>
}
