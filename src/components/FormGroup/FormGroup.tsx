import React, { useState } from 'react'
import classNames from 'classnames'
import uniqueId from 'lodash.uniqueid'
import './FormGroup.css'
import { Disabled } from 'interfaces'

interface FormGroupProps extends Disabled {
  className?: string
  hideFormGroup?: boolean
}

export const FormGroup: React.FC<FormGroupProps> = ({
  disabled = false,
  hideFormGroup = false,
  children,
}) => {

  return (
    <div className="form-group">
      {children}
    </div>
  )
}
