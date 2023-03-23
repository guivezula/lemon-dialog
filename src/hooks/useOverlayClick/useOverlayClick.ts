import { MouseEvent, useCallback } from "react";

export const useOverlayClick = (
  isCallbackAllowed: boolean,
  callback: () => void
) => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (event.target === event.currentTarget && isCallbackAllowed) {
        callback();
      }
    },
    [callback, isCallbackAllowed]
  );

  return handleClick;
};
