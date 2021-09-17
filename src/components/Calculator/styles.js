import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  font-family: 'Roboto Mono', monospace;

  color: #fff;
  background: linear-gradient(to right, rgb(68, 160, 141), rgb(9, 54, 55));

  .title {
    font-size: 2.5em;
  }

  .calculator {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    height: 340px;
    width: 253px;

    border-radius: 5px;
    overflow: hidden;
  }
`
