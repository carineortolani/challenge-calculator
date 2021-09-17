import React, { useState } from 'react'
import { Container } from './styles'
import Display from '../Display'
import Button from '../Button'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setOperation] = useState(null)
  const [values, setValues] = useState([0, 0])
  const [current, setCurrent] = useState(0)

  const handleClear = () => {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0, 0])
    setCurrent(0)
  }

  const handleAdd = (label) => {
    const checkClearDisplay = displayValue === '0' || clearDisplay
    const currentValue = checkClearDisplay ? '' : displayValue
    const newDisplayValue = currentValue + label
    const newValues = [...values]

    if (label !== '.') newValues[current] = parseFloat(newDisplayValue)

    setDisplayValue(newDisplayValue)
    setClearDisplay(false)
    setValues(newValues)
  }

  const calc = (action) => {
    if (values[0] === 0) return

    if (current === 0) {

      setCurrent(1)
      setOperation(action)
      setClearDisplay(true)

    } else {

      const end = action === '='
      const newValues = [...values]

      try { newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`)
      } catch (error) { newValues[0] = values[0] }

      newValues[1] = 0

      setDisplayValue(newValues[0])
      setClearDisplay(!end)
      setOperation(end ? null : action)
      setValues(newValues)
      setCurrent(end ? 0 : 1)

    }
  }


  return (
    <Container>
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        <Display displayValue={displayValue} />

        <Button
          label="AC"
          className="triple"
          action={handleClear}
        />

        <Button
          label="/"
          className="operation"
          action={calc}
        />

        <Button
          label="7"
          action={handleAdd}
        />

        <Button
          label="8"
          action={handleAdd}
        />

        <Button
          label="9"
          action={handleAdd}
        />

        <Button
          label="*"
          className="operation"
          action={calc}
        />

        <Button
          label="4"
          action={handleAdd}
        />

        <Button
          label="5"
          action={handleAdd}
        />

        <Button
          label="6"
          action={handleAdd}
        />

        <Button
          label="-"
          className="operation"
          action={calc}
        />

        <Button
          label="1"
          action={handleAdd}
        />

        <Button
          label="2"
          action={handleAdd}
        />

        <Button
          label="3"
          action={handleAdd}
        />

        <Button
          label="+"
          className="operation"
          action={calc}
        />

        <Button
          label="0"
          action={handleAdd}
        />

        <Button
          label="."
          className="double"
          action={handleAdd}
        />

        <Button
          label="="
          className="operation"
          action={calc}
        />

      </div>
    </Container>
  )
}

export default Calculator
