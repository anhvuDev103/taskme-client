import { RefObject, useCallback, useEffect, useState } from 'react';

const useClickRef = (targetRef: RefObject<HTMLInputElement>) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = useCallback(
    (event: any) => {
      targetRef.current && setIsClicked(targetRef.current.contains(event.target));
    },
    [targetRef]
  );

  useEffect(() => {
    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, [clickHandler]);

  return isClicked;
};

export default useClickRef;
