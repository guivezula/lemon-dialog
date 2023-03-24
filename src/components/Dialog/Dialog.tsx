import React, { ReactNode } from "react";
import { BiX } from "react-icons/bi";
import useEscapeKey from "../../hooks/useEscapeKey";
import useOverlayClick from "../../hooks/useOverlayClick";
import {
  Container,
  DialogContent,
  DialogHeader,
  HEADER_STYLE_CONTENT_BETWEEN,
  HEADER_STYLE_CONTENT_END,
  Overlay,
  Title,
} from "./style/Dialog.styled";

export interface DialogProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  children?: ReactNode;
}

export const Dialog = (props: DialogProps) => {
  const { closeOnOverlayClick, isOpen, onClose, children, title } = props;
  const handleOverlayClick = useOverlayClick(closeOnOverlayClick, onClose);

  useEscapeKey(onClose);

  return (
    <>
      {isOpen && (
        <Overlay data-testid="dialog-element" onClick={handleOverlayClick}>
          <Container>
            <DialogHeader
              style={
                title ? HEADER_STYLE_CONTENT_BETWEEN : HEADER_STYLE_CONTENT_END
              }
            >
              {title && <Title data-testid="title-element">{title}</Title>}
              <BiX data-testid="close-icon" onClick={onClose} />
            </DialogHeader>
            {children && (
              <DialogContent data-testid="content-element">
                {children}
              </DialogContent>
            )}
          </Container>
        </Overlay>
      )}
    </>
  );
};
