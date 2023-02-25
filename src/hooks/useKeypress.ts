import { useCallback, useEffect, useState } from "react";

const useKeypress = (targetKey: string, element = window) => {
  const [isPressed, setIsPressed] = useState(false);

  const keyDownHandler = (event: any) => {
    if (event.key === targetKey) {
      setIsPressed(true);
    }
  };

  const keyUpHandler = (event: any) => {
    if (event.key === targetKey) {
      setIsPressed(false);
    }
  };

  useEffect(() => {
    element.addEventListener("keydown", keyDownHandler);
    element.addEventListener("keyup", keyUpHandler);

    return () => {
      element.removeEventListener("keydown", keyDownHandler);
      element.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return isPressed;
};

export default useKeypress;
