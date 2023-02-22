import { useCallback, useContext } from 'react';

import { Context } from 'contexts/Modals';

const useModal = (modal: React.ReactNode) => {
  const { onPresent, onDismiss } = useContext(Context);

  const handlePresent = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  return [handlePresent, onDismiss];
};

export default useModal;
