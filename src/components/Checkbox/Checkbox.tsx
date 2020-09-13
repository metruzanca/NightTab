import React, { useState } from 'react'
import classNames from 'classnames'
import uniqueId from 'lodash.uniqueid'
import './Checkbox.css'
import { Disabled } from 'interfaces'

interface CheckboxProps extends Disabled {

}

export const Checkbox: React.FC<CheckboxProps> = () => {

  const [checkboxId] = useState(uniqueId("checkbox-button_"))

  return (
    <div className="form-input-button">
      <input id={checkboxId} type="checkbox" tabIndex={1}/>
      <label htmlFor={checkboxId} className="mb-0">
        <span className="label-icon"/>
        Checkbox button
      </label>
    </div>
  )
}