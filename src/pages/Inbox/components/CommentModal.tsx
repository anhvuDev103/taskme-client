import React from 'react';
import styled from 'styled-components';

import Input from 'components/Input';
import { Flex } from 'components/UIkit';
import Modal from 'components/Modal';

interface Props {
  onAgree: () => void;
  onDismiss: () => void;
}

const CommentModal = ({ onAgree, onDismiss }: Props) => {
  // console.log(isOpen);
  return (
    <Modal title="Go Pro" onAgree={onAgree} onCancel={onDismiss}>
      Keep all the project-level information you need neatly organized in one place. Upload relevant
      files and save important project details in additional notes.
    </Modal>
  );
};
export default CommentModal;
