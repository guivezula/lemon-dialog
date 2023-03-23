import styled from 'styled-components';

const Overlay = styled.div `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0,0,0,0.7);
  z-index: 1000;
`;

const Container = styled.div `
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 4px;
  transform: translate(-50%, -45%);
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  min-height: 50%;
  min-width: 50%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    left: unset;
    top: unset;
    bottom: 0;
    transform: translate(0%, 0%);
  }
`;

const DialogHeader = styled.header `
  display: flex;
  padding: 1.5rem;
  font-family: Inter;
  font-size: 36px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.032em;
  text-align: left;
`;

const DialogContent = styled.div `
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.028em;
  text-align: left;

  padding: 0px 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
      width: 12px;
  }

  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
  }
`;

const HEADER_STYLE_CONTENT_END = {
  justifyContent: 'end',
};

const HEADER_STYLE_CONTENT_BETWEEN = {
  justifyContent: 'space-between',
};

export {Overlay, Container, DialogHeader, DialogContent, HEADER_STYLE_CONTENT_BETWEEN, HEADER_STYLE_CONTENT_END };