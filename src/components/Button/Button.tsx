import React, { } from 'react'
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
  className,
  type = ButtonType.default,
  size = ButtonSize.medium,
  onClick: handleClick = undefined,
  disabled = false,
  children = 'Button'
}) => {
  const btnClass = classNames('button', className, type, size)

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