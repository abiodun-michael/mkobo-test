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
      d="M.878 9V6.001H.174v-.898h.704V4.23H.174v-.898h.704V.332h1.906l.947 2.999h1.105V.332h1.347v2.999h.692v.898h-.692v.874h.692v.898h-.692v3H4.265l-.97-3h-1.07v3H.879Zm1.3-5.67h.34l-.353-1.165h-.049l.061 1.166Zm.048 1.773h.801L2.76 4.23H2.2l.025.874Zm2.076 0h.558l-.024-.874h-.814l.28.874Zm.57 2.003h.061l-.049-1.105h-.327l.315 1.105Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
