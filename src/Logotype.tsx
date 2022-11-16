import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logotype(props: LogoProps) {
  return (
    <svg
      width={153}
      height={50}
      viewBox="0 0 153 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 39.063c3.125 0 8.3-.04 14.238-3.477 5.938-3.438 7.871-7.715 8.477-9.922a1.542 1.542 0 00-1.113-1.914c-1.426-.371-3.926-.703-7.13.059M10.527 23.79c-3.203-.743-5.703-.411-7.129-.04a1.543 1.543 0 00-1.113 1.914c.606 2.207 2.54 6.504 8.477 9.922 5.937 3.418 11.113 3.477 14.238 3.477"
        stroke="#81D8F7"
        strokeWidth={3.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 39.063s7.813-4.258 7.813-15.626c0-8.906-4.805-13.437-6.876-15a1.582 1.582 0 00-1.875 0c-2.07 1.563-6.875 6.094-6.875 15C17.188 34.806 25 39.063 25 39.063z"
        stroke="#81D8F7"
        strokeWidth={3.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 39.063c2.344-.508 8.652-4.063 12.441-10.626 3.79-6.562 2.852-11.777 2.11-14.062a1.524 1.524 0 00-1.797-1.035 15.057 15.057 0 00-6.133 2.95M18.379 16.29a15.057 15.057 0 00-6.133-2.95 1.523 1.523 0 00-1.797 1.035c-.742 2.285-1.68 7.52 2.11 14.063C16.348 34.98 22.656 38.555 25 39.063"
        stroke="#81D8F7"
        strokeWidth={3.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M63.523 30.5L60.34 18.864h1.432l2.431 9.477h.114l2.478-9.477h1.59l2.478 9.477h.113l2.432-9.477h1.432L71.659 30.5h-1.455l-2.568-9.273h-.09L64.977 30.5h-1.454zm22.345-5.818c0 1.227-.222 2.288-.665 3.182-.443.894-1.051 1.583-1.824 2.068-.773.485-1.655.727-2.648.727-.992 0-1.874-.242-2.647-.727-.773-.485-1.38-1.174-1.824-2.068-.443-.894-.665-1.955-.665-3.182 0-1.227.222-2.288.665-3.182.443-.894 1.051-1.583 1.824-2.068.772-.485 1.655-.727 2.647-.727.993 0 1.876.242 2.648.727.773.485 1.38 1.174 1.824 2.068.443.894.665 1.954.665 3.182zm-1.364 0c0-1.008-.168-1.858-.505-2.551-.334-.694-.786-1.218-1.358-1.574a3.522 3.522 0 00-1.91-.534 3.55 3.55 0 00-1.914.534c-.568.356-1.021.88-1.358 1.574-.334.693-.5 1.543-.5 2.55 0 1.008.166 1.859.5 2.552.337.693.79 1.218 1.358 1.574a3.55 3.55 0 001.915.534 3.52 3.52 0 001.909-.534c.572-.356 1.024-.88 1.358-1.574.337-.693.505-1.544.505-2.551zm3.733 5.818V18.864h3.932c.91 0 1.655.155 2.239.465.583.307 1.015.73 1.295 1.268.28.537.42 1.15.42 1.835s-.14 1.293-.42 1.824c-.28.53-.71.947-1.29 1.25-.58.299-1.32.448-2.221.448H89.01v-1.272h3.136c.621 0 1.121-.091 1.5-.273.383-.182.66-.44.83-.773.174-.337.261-.738.261-1.204 0-.466-.087-.873-.261-1.222a1.782 1.782 0 00-.835-.807c-.383-.193-.889-.29-1.517-.29h-2.478V30.5h-1.409zm5.478-5.227l2.863 5.227h-1.636l-2.818-5.227h1.59zm4.757 5.227V18.864h1.409v5.772h.136l5.227-5.772h1.841l-4.886 5.25 4.886 6.386h-1.704l-4.046-5.41-1.454 1.637V30.5h-1.41zm10.437 0V18.864h4.068c.811 0 1.479.14 2.006.42.526.277.919.65 1.176 1.12.258.465.386.982.386 1.55 0 .5-.089.913-.267 1.24a2.074 2.074 0 01-.693.772c-.284.19-.593.33-.926.42v.114c.356.023.714.148 1.074.375.36.227.661.553.903.977.243.424.364.944.364 1.557 0 .583-.133 1.108-.398 1.574-.265.466-.683.835-1.255 1.108-.572.273-1.317.409-2.233.409h-4.205zm1.409-1.25h2.796c.92 0 1.574-.178 1.96-.534.39-.36.585-.796.585-1.307 0-.394-.1-.758-.301-1.09a2.182 2.182 0 00-.858-.808c-.371-.204-.811-.306-1.318-.306h-2.864v4.045zm0-5.273h2.614c.424 0 .807-.083 1.148-.25.344-.166.617-.401.818-.704.204-.303.307-.66.307-1.069 0-.51-.178-.945-.535-1.3-.356-.36-.92-.54-1.693-.54h-2.659v3.863zm18.816.705c0 1.227-.222 2.288-.665 3.182-.443.894-1.051 1.583-1.824 2.068-.773.485-1.655.727-2.648.727-.992 0-1.875-.242-2.648-.727-.772-.485-1.38-1.174-1.823-2.068-.444-.894-.665-1.955-.665-3.182 0-1.227.221-2.288.665-3.182.443-.894 1.051-1.583 1.823-2.068.773-.485 1.656-.727 2.648-.727.993 0 1.875.242 2.648.727.773.485 1.381 1.174 1.824 2.068.443.894.665 1.954.665 3.182zm-1.364 0c0-1.008-.169-1.858-.506-2.551-.333-.694-.786-1.218-1.358-1.574a3.52 3.52 0 00-1.909-.534c-.704 0-1.343.178-1.915.534-.568.356-1.02.88-1.358 1.574-.333.693-.5 1.543-.5 2.55 0 1.008.167 1.859.5 2.552.338.693.79 1.218 1.358 1.574a3.552 3.552 0 001.915.534c.705 0 1.341-.178 1.909-.534.572-.356 1.025-.88 1.358-1.574.337-.693.506-1.544.506-2.551zm13.551 0c0 1.227-.222 2.288-.665 3.182-.443.894-1.051 1.583-1.824 2.068-.772.485-1.655.727-2.647.727-.993 0-1.875-.242-2.648-.727-.773-.485-1.381-1.174-1.824-2.068-.443-.894-.665-1.955-.665-3.182 0-1.227.222-2.288.665-3.182.443-.894 1.051-1.583 1.824-2.068.773-.485 1.655-.727 2.648-.727.992 0 1.875.242 2.647.727.773.485 1.381 1.174 1.824 2.068.443.894.665 1.954.665 3.182zm-1.364 0c0-1.008-.168-1.858-.505-2.551-.334-.694-.786-1.218-1.358-1.574a3.522 3.522 0 00-1.909-.534 3.55 3.55 0 00-1.915.534c-.568.356-1.021.88-1.358 1.574-.333.693-.5 1.543-.5 2.55 0 1.008.167 1.859.5 2.552.337.693.79 1.218 1.358 1.574a3.55 3.55 0 001.915.534c.704 0 1.341-.178 1.909-.534.572-.356 1.024-.88 1.358-1.574.337-.693.505-1.544.505-2.551zm3.733 5.818V18.864h1.409v5.772h.137l5.227-5.772h1.841l-4.886 5.25 4.886 6.386h-1.705l-4.045-5.41-1.455 1.637V30.5h-1.409z"
        fill="#fff"
      />
    </svg>
  );
}
