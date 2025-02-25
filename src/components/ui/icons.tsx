import { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>
export const Icons = {
  ThumbsUp: (props: IconProps) => (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clip-path="url(#clip0_628_1002)">
    <path d="M3.18468 7.72895H6.21491C6.49436 7.72895 6.73341 7.5606 6.83442 7.31818L7.85123 4.94451C7.88153 4.86707 7.89836 4.78626 7.89836 4.69872V4.02534C7.89836 3.65498 7.59534 3.35196 7.22498 3.35196H5.10046L5.42031 1.81328L5.43041 1.70554C5.43041 1.56749 5.37318 1.43955 5.28227 1.34864L4.92538 0.995117L2.70658 3.21391C2.58537 3.33512 2.5113 3.50347 2.5113 3.68865V7.05556C2.5113 7.42593 2.81432 7.72895 3.18468 7.72895ZM3.18468 3.68865L4.64592 2.22741L4.19476 4.02534H7.22498V4.69872L6.21491 7.05556H3.18468V3.68865ZM0.49115 3.68865H1.83792V7.72895H0.49115V3.68865Z" fill="#858786"/>
    </g>
    <defs>
    <clipPath id="clip0_628_1002">
    <rect width="8.0806" height="8.0806" fill="white" transform="translate(0.154419 0.658447)"/>
    </clipPath>
    </defs>
    </svg>
    
  ),
  Circle:(props: IconProps) => (
    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="1.62434" cy="1.69874" r="1.15437" fill="#858786"/>
</svg>

  ),
  Star: (props: IconProps) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.3235 24L8.57349 15.75L0.323486 12L8.57349 8.25L12.3235 0L16.0735 8.25L24.3235 12L16.0735 15.75L12.3235 24Z" fill="currentColor"/>
</svg>
  )
}
