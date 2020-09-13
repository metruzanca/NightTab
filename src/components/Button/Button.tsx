import React, { useState } from 'react'
import classNames from 'classnames'
import './Button.css'
import { Disabled } from 'interfaces'

export enum ButtonType{
  default = '',
  line = 'button-line',
  ring = 'button-ring',
}

export enum ButtonSize{
  medium = '',
  small = 'button-small',
  large = 'button-large',
}

interface ButtonProps extends Disabled{
  className?: string
  type?: ButtonType
  size?: ButtonSize
  onClick?: ()=>void
}

export const Button: React.FC<ButtonProps> = ({
  className = undefined,
  type = ButtonType.default,
  size = ButtonSize.medium,
  onClick: handleClick = undefined,
  disabled = false,
  children = 'Button'
}) => {
  // If btnClass needs to change, replace useState with useMemo
  const [btnClass] = useState(classNames('button', className, type, size))

  return (
    <button 
      className={btnClass}
      tabIndex={1}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  ) 
} 