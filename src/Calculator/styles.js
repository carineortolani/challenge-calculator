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

    boder-radius: 5px;
    overflow: hidden;
  }
`
export const Displayed = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column: span 4;
  padding: 20px;
  margin-top: 20px;

  font-size: 2em;
  color: #fff;

  border: none;
  outline: none;
  background-color: #0004;
  overflow: hidden;
`
export const Buttons = styled.button`
  font-size: 1.4em;
  background-color: #f0f0f0;
  border: solid 1px #888;
  outline: none;

  &:active {
    background-color: #ccc;
  }

  //double {
  //   grid-column: span 2;
  // }

  //triple {
  //   grid-column: span 3;
  // }

  //operation {
  //   background-color: #F28223;
  //   color: #fff;
  // }

  //operation:active {
  //   background-color: #f67300;
  // }
`
