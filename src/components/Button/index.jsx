import React from 'react'
import { Buttons } from './styles'

const Button = ({ label, className, action}) => (
  <Buttons className={className} onClick={() => action(label)}>
    {label}
  </Buttons>
)

export default Button
