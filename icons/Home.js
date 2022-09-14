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
      d="m24.381 10.14-4.533-3.87.016-.085V1.123a.564.564 0 0 0-.545-.556h-2.532c-.29 0-.53.26-.53.556V3.22L12.63.127a.53.53 0 0 0-.688 0L.192 10.136a.53.53 0 1 0 .677.815l.01-.01 11.407-9.712 11.412 9.717a.53.53 0 0 0 .747-.059.534.534 0 0 0-.064-.746ZM18.8 5.376l-1.483-1.25V1.631H18.8v3.744Z"
      fill="url(#a)"
    />
    <path
      d="M22.046 11.21 12.63 3.168a.53.53 0 0 0-.689 0L2.527 11.21a.529.529 0 0 0-.058.746.515.515 0 0 0 .73.064l.006-.006.662-.572v9.93c.005.296.248.54.545.545h15.743a.555.555 0 0 0 .546-.545v-9.93l.662.572a.526.526 0 0 0 .741-.058.524.524 0 0 0-.058-.747Zm-7.641 9.644h-4.237v-5.72h4.237v5.72Zm1.059 0V14.62c0-.291-.218-.546-.509-.546H9.617c-.29 0-.508.255-.508.546v6.233H4.926V10.538l7.36-6.27 7.361 6.27v10.316h-4.183Z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.361}
        y1={1.289}
        x2={24.573}
        y2={1.188}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4181F9" />
        <stop offset={1} stopColor="#0047CC" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={0.361}
        y1={1.289}
        x2={24.573}
        y2={1.188}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4181F9" />
        <stop offset={1} stopColor="#0047CC" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
