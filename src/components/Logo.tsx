import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'navbar' }) => {
  if (variant === 'footer') {
    return (
      <svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" style={{ width: 120, height: 'auto', display: 'block' }}>
        <rect x="0" y="0" width="600" height="700" fill="#0A0A1A" rx="12" />
        <g id="lotus">
          <path d="M105,328 Q180,255 300,425 Q225,392 105,328 Z" fill="#E8751A" stroke="#0A0A1A" strokeWidth="3" />
          <path d="M495,328 Q420,255 300,425 Q375,392 495,328 Z" fill="#E8751A" stroke="#0A0A1A" strokeWidth="3" />
          <path d="M192,208 Q255,170 300,427 Q268,397 192,208 Z" fill="#E8751A" stroke="#0A0A1A" strokeWidth="3" />
          <path d="M408,208 Q345,170 300,427 Q332,397 408,208 Z" fill="#E8751A" stroke="#0A0A1A" strokeWidth="3" />
          <path d="M300,118 C228,160 222,355 300,432 C378,355 372,160 300,118 Z" fill="#E8751A" stroke="#0A0A1A" strokeWidth="3" />
        </g>
        <g fill="#FFFFFF">
          <circle cx="112" cy="407" r="8" />
          <path d="M105,419 C105,415 109,414 112,414 C115,414 119,415 119,419 L120,446 C120,451 117,454 115,455 L115,468 L112,468 L111.5,457 L111,468 L108,468 L108,455 C106,454 103,451 103,446 Z" />
          <circle cx="148" cy="337" r="13" />
          <path d="M136,358 C136,351 141,350 148,350 C155,351 160,352 160,358 L162,405 C162,414 157,419 153,421 L153,450 L147,450 L146.5,408 L146,450 L141,450 L141,421 C137,419 134,414 134,405 Z" />
          <circle cx="192" cy="337" r="12.5" />
          <path d="M180,358 C180,351 185,350 192,350 C199,350 204,351 204,358 L208,413 C208,419 204,422 200,423 L200,453 L195,453 L192,429 L189,453 L184,453 L184,423 C180,422 176,419 176,413 Z" />
          <circle cx="238" cy="407" r="8" />
          <path d="M231,419 C231,415 235,414 238,414 C241,414 245,415 245,419 L246,446 C246,451 243,454 241,455 L241,468 L238,468 L237.5,457 L237,468 L234,468 L234,455 C232,454 229,451 229,446 Z" />
          <circle cx="274" cy="407" r="8" />
          <path d="M267,419 C267,415 271,414 274,414 C277,414 281,415 281,419 L282,446 C282,451 279,454 277,455 L277,468 L274,468 L273.5,457 L273,468 L270,468 L270,455 C268,454 265,451 265,446 Z" />
          <circle cx="306" cy="367" r="12.5" />
          <path d="M294,388 C294,382 300,381 306,381 C312,381 317,383 318,389 L320,412 L308,414 L307,434 L301,434 L301,412 L295,412 Z" />
          <circle cx="306" cy="440" r="24" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="306" cy="440" r="4" fill="#FFFFFF" />
          <line x1="306" y1="440" x2="306" y2="418" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="306" y1="440" x2="288" y2="440" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="306" y1="440" x2="320" y2="452" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="306" y1="440" x2="292" y2="458" stroke="#FFFFFF" strokeWidth="2.5" />
          <rect x="315" y="410" width="6" height="5" fill="#FFFFFF" />
          <circle cx="366" cy="407" r="8" />
          <path d="M359,419 C359,415 363,414 366,414 C369,414 373,415 373,419 L374,446 C374,451 371,454 369,455 L369,468 L366,468 L365.5,457 L365,468 L362,468 L362,455 C360,454 357,451 357,446 Z" />
          <circle cx="406" cy="337" r="12.5" />
          <path d="M394,358 C394,351 399,350 406,350 C413,350 418,351 418,358 L422,413 C422,419 418,422 414,423 L414,453 L409,453 L406,429 L403,453 L398,453 L398,423 C394,422 390,419 390,413 Z" />
          <circle cx="450" cy="337" r="13" />
          <path d="M438,358 C438,351 443,350 450,350 C457,351 462,352 462,358 L464,405 C464,414 459,419 455,421 L455,450 L449,450 L448.5,408 L448,450 L443,450 L443,421 C439,419 436,414 436,405 Z" />
          <circle cx="506" cy="407" r="8" />
          <path d="M499,419 C499,415 503,414 506,414 C509,414 513,415 513,419 L514,446 C514,451 511,454 509,455 L509,468 L506,468 L505.5,457 L505,468 L502,468 L502,455 C500,454 497,451 497,446 Z" />
        </g>
        <text x="300" y="545" textAnchor="middle">
          <tspan fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="52" letterSpacing="1" fill="#E8751A" stroke="#FFFFFF" strokeWidth="2" paintOrder="stroke">OBOMOCARE </tspan>
          <tspan fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontWeight="700" fontSize="48" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" paintOrder="stroke">LLC</tspan>
        </text>
        <text x="300" y="592" textAnchor="middle" fontFamily="'Segoe Script','Brush Script MT', cursive" fontStyle="italic" fontSize="22" fill="#FFFFFF" opacity="0.9">Supporting Independence with Dignity and Heart</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 48" xmlns="http://www.w3.org/2000/svg" style={{ height: 36, width: 'auto', display: 'block' }}>
      <g transform="translate(0, 4)">
        <rect x="0" y="0" width="40" height="40" fill="#E8751A" rx="8" />
        <path d="M20,6 C14,12 12,28 20,36 C28,28 26,12 20,6 Z" fill="#FFFFFF" opacity="0.95" />
        <path d="M12,18 Q16,14 20,26 Q17,22 12,18 Z" fill="#FFFFFF" opacity="0.7" />
        <path d="M28,18 Q24,14 20,26 Q23,22 28,18 Z" fill="#FFFFFF" opacity="0.7" />
      </g>
      <text x="52" y="30" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="2" fill="#FFFFFF">OBOMOCARE</text>
      <text x="52" y="44" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontWeight="600" fontSize="13" fill="#E8751A">LLC</text>
    </svg>
  );
};

