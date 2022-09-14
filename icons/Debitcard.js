import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.885 6.497 9.312 7h-.395l-.253-.328L8.398 7H8l.442-.51L8.049 6h.393l.226.306L8.912 6H9.3l-.415.497ZM11.115 6.497l.427.503h-.396l-.253-.328-.266.328h-.398l.442-.51-.393-.49h.393l.227.306.244-.306h.387l-.414.497ZM13.344 6.497 13.77 7h-.395l-.254-.328-.266.328h-.398l.442-.51-.393-.49h.393l.227.306L13.37 6h.388l-.415.497ZM15.573 6.497 16 7h-.395l-.254-.328-.266.328h-.397l.441-.51-.393-.49h.393l.227.306L15.6 6h.388l-.415.497Z"
      fill="#8B9298"
    />
    <rect
      x={0.35}
      y={0.35}
      width={18.3}
      height={11.3}
      rx={0.65}
      stroke="#8B9298"
      strokeWidth={0.7}
    />
  </svg>
)

export default SvgComponent
