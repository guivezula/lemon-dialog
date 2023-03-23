import styled from "styled-components";

const AppBody = styled.div `
  text-align: center;
  background-color: rgb(0, 128, 89);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Button = styled.button `
  background: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;

`;

export { AppBody, Button };