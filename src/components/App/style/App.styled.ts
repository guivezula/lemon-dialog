import styled from "styled-components";

const AppBody = styled.div `
  text-align: center;
  background-color: rgb(0, 128, 89);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(0.625rem + 2vmin);
  color: white;
`;

const Button = styled.button `
  background: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 3px;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  font-size: 1.25rem;
  font-family: Inter;
  font-weight: 400;

`;

export { AppBody, Button };