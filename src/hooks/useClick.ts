import { useEffect, useState } from "react";

const useClick = (...selectors: string[]) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = (event: any) => {
    if (event.target.closest(selectors.join())) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return isClicked;
};

export default useClick;
