import { CloseIc } from 'components/Icons';
import { Button, Flex, Text } from 'components/UIkit';
import { StyledModal } from 'components/UIkit/modal';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  children: React.ReactNode;
  onAgree: () => void;
  onCancel: () => void;
  agreeText?: string;
}

const Modal = ({ title, children, onAgree, agreeText = 'Done', onCancel }: Props) => {
  return (
    <StyledModal>
      <ModalHeader>
        <Text>{title}</Text>
        <Button transparentBg onClick={onCancel}>
          <CloseIc />
        </Button>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
      <ModalFooter>
        <Button color="#444" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onAgree}>
          {agreeText}
        </Button>
      </ModalFooter>
    </StyledModal>
  );
};

const ModalHeader = styled(Flex)`
  color: ${({ theme }) => theme.color.text};
  font-size: 20px !important;
  font-weight: bold;
`;

const ModalContent = styled.div`
  padding: 16px 0 32px;
`;

const ModalFooter = styled(Flex)`
  padding: 16px 0 0;
  justify-content: flex-end !important;
  gap: 16px;

  ${Button} {
    width: unset;
    padding: 0 12px;
    font-weight: 600;
  }
`;

export default Modal;
