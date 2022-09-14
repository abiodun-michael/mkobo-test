import * as React from "react"

const SvgComponent = (props) => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Rectangle 5"}</title>
    <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
  </svg>
)

export default SvgComponent