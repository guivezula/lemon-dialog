import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  transform: translate(0%, 0%);
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  min-height: 50%;
  min-width: 50%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DialogHeader = styled.header`
  display: flex;
  padding: 32px;
  height: 46px;
  align-items: center;
`;

const Title = styled.span`
  font-family: Inter;
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.032em;
  text-align: left;
`;

const DialogContent = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.028em;
  text-align: left;

  padding: 0px 32px 32px 32px;
  overflow-y: auto;
`;

const HEADER_STYLE_CONTENT_END = {
  justifyContent: "end",
};

const HEADER_STYLE_CONTENT_BETWEEN = {
  justifyContent: "space-between",
};

export {
  Overlay,
  Container,
  DialogHeader,
  Title,
  DialogContent,
  HEADER_STYLE_CONTENT_BETWEEN,
  HEADER_STYLE_CONTENT_END,
};
