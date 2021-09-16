import React, { useState } from "react"

import { Container, Displayed, Buttons } from "./styles"

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0)

  return (
    <Container>
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        <Displayed>
          {displayValue}
        </Displayed>
        <Buttons value="AC">AC</Buttons>
        <Buttons value="/">/</Buttons>
        <Buttons value="7">7</Buttons>
        <Buttons value="8">8</Buttons>
        <Buttons value="9">9</Buttons>
        <Buttons value="*">*</Buttons>
        <Buttons value="4">4</Buttons>
        <Buttons value="5">5</Buttons>
        <Buttons value="6">6</Buttons>
        <Buttons value="-">-</Buttons>
        <Buttons value="1">1</Buttons>
        <Buttons value="2">2</Buttons>
        <Buttons value="3">3</Buttons>
        <Buttons value="+">+</Buttons>
        <Buttons value="0">0</Buttons>
        <Buttons value=".">.</Buttons>
        <Buttons value="=">=</Buttons>
      </div>
    </Container>
  )
}

export default Calculator
