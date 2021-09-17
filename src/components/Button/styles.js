import styled from 'styled-components'

export const Buttons = styled.button`
  font-size: 1.4em;
  background-color: #f0f0f0;
  border: solid 1px #888;
  outline: none;

  &:active {
    background-color: #ccc;
  }

  &.double {
    grid-column: span 2;
  }

  &.triple {
    grid-column: span 3;
  }

  &.operation {
    background-color: #F28223;
    color: #fff;
  }

    &.operation:active {
      background-color: #f67300;
    }
`
