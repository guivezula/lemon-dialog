import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Dialog, DialogProps } from "../Dialog";

const renderDialog = (props: DialogProps) => {
  return render(<Dialog {...props} />);
};

describe("Dialog component test", () => {
  let defaultProps: DialogProps;

  beforeAll(() => {
    defaultProps = {
      isOpen: true,
      closeOnOverlayClick: false,
      onClose: jest.fn(),
    };
  });

  it("it should be visible when props isOpen is true", () => {
    renderDialog(defaultProps);

    const component = screen.getByTestId("dialog-element");

    expect(component).toBeInTheDocument();
  });

  it("it should not be visible when props isOpen is false", () => {
    const props: DialogProps = { ...defaultProps, isOpen: false };

    renderDialog(props);

    const component = screen.queryByTestId("dialog-element");

    expect(component).toBeNull();
  });

  it("it should render title", () => {
    const props: DialogProps = { ...defaultProps, title: "Any Title" };

    renderDialog(props);

    const title = screen.getByText(/any title/i);

    expect(title).toBeInTheDocument();
  });

  it("it should not render title", () => {
    renderDialog(defaultProps);

    const title = screen.queryByTestId("title-element");

    expect(title).toBeNull();
  });

  it("it should render children content", () => {
    const props: DialogProps = { ...defaultProps, children: <>any content</> };

    renderDialog(props);

    const children = screen.getByText(/any content/i);

    expect(children).toBeInTheDocument();
  });

  it("it should not render children content", () => {
    renderDialog(defaultProps);

    const content = screen.queryByTestId("content-element");

    expect(content).toBeNull();
  });

  it("it should call onClose method when click on icon", () => {
    const handler = jest.fn();
    const props: DialogProps = { ...defaultProps, onClose: handler };

    renderDialog(props);

    const icon = screen.getByTestId("close-icon");
    fireEvent.click(icon);

    expect(handler).toHaveBeenCalled();
  });

  it("it should call onClose method when Esc is clicked", () => {
    const handler = jest.fn();
    const props: DialogProps = { ...defaultProps, onClose: handler };

    const { container } = renderDialog(props);
    fireEvent.keyDown(container, { key: "Escape" });

    expect(handler).toHaveBeenCalled();
  });

  it("it should call onClose method when Overlay is clicked and closeOnOverlayClick is true", () => {
    const handler = jest.fn();
    const props: DialogProps = {
      ...defaultProps,
      onClose: handler,
      closeOnOverlayClick: true,
    };

    renderDialog(props);

    const overlay = screen.getByTestId("dialog-element");
    fireEvent.click(overlay);

    expect(handler).toHaveBeenCalled();
  });

  it("it should not call onClose method when Overlay is clicked and closeOnOverlayClick is false", () => {
    const handler = jest.fn();
    const props: DialogProps = {
      ...defaultProps,
      onClose: handler,
      closeOnOverlayClick: false,
    };

    renderDialog(props);

    const overlay = screen.getByTestId("dialog-element");
    fireEvent.click(overlay);

    expect(handler).not.toHaveBeenCalled();
  });
});
