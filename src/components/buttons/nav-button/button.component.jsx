import React from 'react'
import "./button.styles.scss"

const Button = ({children,className, ...otherProps}) => {
  return (
    <div className={className}>
    <button {...otherProps}>{children}</button>
    </div>
  )
}

export default Button;