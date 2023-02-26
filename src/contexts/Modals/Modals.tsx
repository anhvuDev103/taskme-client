import { AnimatePresence, motion } from 'framer-motion';
import React, { createContext, useCallback, useState } from 'react';
import styled from 'styled-components';

interface ModalsContext {
  content?: React.ReactNode;
  isOpen?: boolean;
  onPresent: (content: React.ReactNode) => void;
  onDismiss: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const Context = createContext<ModalsContext>({
  onPresent: () => {},
  onDismiss: () => {},
});

const Modals = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>();

  const handlePresent = useCallback(
    (modalContent: React.ReactNode) => {
      setIsOpen(true);
      setContent(modalContent);
    },
    [setIsOpen, setContent]
  );

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, [setIsOpen, setContent]);

  return (
    <Context.Provider
      value={{
        content,
        isOpen,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
      }}
    >
      {children}
      {isOpen && (
        <StyledModalWrapper>
          <StyledModalBackdrop onClick={handleDismiss} />
          {React.isValidElement(content) &&
            React.cloneElement(content as React.ReactElement, {
              onDismiss: handleDismiss,
            })}
        </StyledModalWrapper>
      )}
      <AnimatePresence>
        {isOpen && (
          <StyledModalWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'Inertia', stiffness: 100 }}
          >
            <StyledModalBackdrop onClick={handleDismiss} />
            {React.isValidElement(content) &&
              React.cloneElement(content as React.ReactElement, {
                onDismiss: handleDismiss,
              })}
          </StyledModalWrapper>
        )}
      </AnimatePresence>
    </Context.Provider>
  );
};

const StyledModalWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;
`;

const StyledModalBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modals;
