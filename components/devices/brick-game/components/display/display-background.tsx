import React, { FC } from 'react'

export const DisplayBackground: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={164} height={235} fill="none" viewBox="0 0 164 235">
      <g filter="url(#a_Display)">
        <path fill="#64645A" d="M0 0h164v231H0z" />
      </g>
      <path stroke="#B4D2E6" d="M.5.5h163v230H.5z" />
      <g filter="url(#b_Display)">
        <path stroke="#000" d="M111.5 4v223" />
      </g>
      <g filter="url(#c_Display)">
        <path stroke="#000" d="M110 2.5H5" />
      </g>
      <g filter="url(#d_Display)">
        <path stroke="#000" d="M3.5 4v223" />
      </g>
      <g filter="url(#e_Display)">
        <path stroke="#000" d="M5 228.5h105" />
      </g>

      <defs>
        <filter
          id="a_Display"
          width={164}
          height={235}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feMorphology in="SourceAlpha" radius={4} result="effect1_innerShadow_10_1281" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_10_1281" />
        </filter>
        <filter
          id="b_Display"
          width={9}
          height={231}
          x={109}
          y={2}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_10_1281" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_1281" result="shape" />
        </filter>
        <filter
          id="c_Display"
          width={113}
          height={9}
          x={3}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_10_1281" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_1281" result="shape" />
        </filter>
        <filter
          id="d_Display"
          width={9}
          height={231}
          x={1}
          y={2}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_10_1281" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_1281" result="shape" />
        </filter>
        <filter
          id="e_Display"
          width={113}
          height={9}
          x={3}
          y={226}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_10_1281" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_1281" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}
