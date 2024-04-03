import React, { ReactNode } from "react"

const Container = (props: {children?: ReactNode, className?: string}) => {
  return (
    <div className={`${props.className} container`}>{props.children}</div>
  )
}

export default Container