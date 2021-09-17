import React from 'react'
import { Buttons } from './styles'

const Button = ({ label, className}) => (
  <Buttons className={className}>
    {label}
  </Buttons>
)

export default Button
