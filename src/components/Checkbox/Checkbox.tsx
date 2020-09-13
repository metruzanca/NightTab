import React, { useState } from 'react'
import classNames from 'classnames'
import uniqueId from 'lodash.uniqueid'
import './Checkbox.css'
import { Disabled } from 'interfaces'

export enum CheckboxType{
  default = '',
  line = 'form-input-button-line',
  ring = 'form-input-button-ring',
} 

interface CheckboxProps extends Disabled {
  className?:string
  type?:CheckboxType
  hideCheckbox?:boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className = undefined,
  type = CheckboxType.default,
  disabled = false,
  hideCheckbox = false,
  children = 'Checkbox',
}) => {
  // If btnClass needs to change, replace useState with useMemo
  const [btnClass] = useState(classNames(
    'form-input-button', className, type, { "form-input-hide": hideCheckbox }
  ))
  const [checkboxId] = useState(uniqueId("checkbox-button_"))

  return (
    <div className={btnClass}>
      <input id={checkboxId} type="checkbox" tabIndex={1} disabled={disabled}/>
      <label htmlFor={checkboxId} className="mb-0">
        <span className="label-icon"/>
        {children}
      </label>
    </div>
  )
}