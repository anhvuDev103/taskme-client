import React from 'react';

import Modal from 'components/Modal';

interface Props {
  onAgree: () => void;
  onDismiss?: () => void;
}

const CommentModal = ({ onAgree, onDismiss = () => {} }: Props) => {
  return (
    <Modal title="Go Pro" onAgree={onAgree} onCancel={onDismiss}>
      Keep all the project-level information you need neatly organized in one place. Upload relevant
      files and save important project details in additional notes.
    </Modal>
  );
};
export default CommentModal;
