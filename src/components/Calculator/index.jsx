import React, { useState } from 'react'
import { Container } from './styles'
import Display from '../Display'
import Button from '../Button'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0)

  return (
    <Container>
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        <Display displayValue={displayValue} />
        <Button label="AC" className="triple" />
        <Button label="/" className="operation" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" className="operation" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" className="operation" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" className="operation" />
        <Button label="0" />
        <Button label="." className="double" />
        <Button label="=" className="operation" />
      </div>
    </Container>
  )
}

export default Calculator
