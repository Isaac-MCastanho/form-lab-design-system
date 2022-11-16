import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={102}
      height={102}
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M51 79.688c6.375 0 16.934-.08 29.046-7.093 12.113-7.012 16.057-15.738 17.292-20.24a3.149 3.149 0 00-2.27-3.905c-2.91-.757-8.01-1.434-14.544.12M21.476 48.53c-6.535-1.514-11.635-.837-14.543-.08a3.148 3.148 0 00-2.271 3.905c1.235 4.502 5.18 13.268 17.292 20.24C34.066 79.568 44.625 79.688 51 79.688"
        stroke="#81D8F7"
        strokeWidth={6.375}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 79.688S66.938 71 66.938 47.811c0-18.168-9.802-27.412-14.026-30.6a3.227 3.227 0 00-3.825 0c-4.223 3.188-14.025 12.432-14.025 30.6C35.063 71.002 51 79.689 51 79.689z"
        stroke="#81D8F7"
        strokeWidth={6.375}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 79.688c4.781-1.036 17.65-8.288 25.38-21.675 7.73-13.388 5.818-24.026 4.304-28.688a3.108 3.108 0 00-3.666-2.112 30.72 30.72 0 00-12.511 6.017M37.493 33.23a30.72 30.72 0 00-12.511-6.017 3.108 3.108 0 00-3.666 2.112c-1.514 4.662-3.426 15.34 4.303 28.688C33.35 71.36 46.22 78.651 51 79.688"
        stroke="#81D8F7"
        strokeWidth={6.375}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
