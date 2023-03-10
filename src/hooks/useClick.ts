import { useCallback, useEffect, useState } from 'react';

const useClick = (...selectors: string[]) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = useCallback(
    (event: any) => {
      if (event.target.closest(selectors.join())) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    },
    [selectors]
  );

  useEffect(() => {
    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, [clickHandler]);

  return isClicked;
};

export default useClick;
