import { useCallback, useEffect } from "react";

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keydown';
 
export const useEscapeKey = (callback: () => void) => {
    const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === KEY_NAME_ESC) {
      callback();
    }
  }, [callback]);
 
  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);
 
    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}
