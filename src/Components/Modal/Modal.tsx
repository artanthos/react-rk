import React, {ReactNode} from 'react';
import {ModalHeader} from 'reactstrap';
import {StyledModal} from './Modal.style';

interface ModalProps {
    title?: string;
    children: ReactNode;
    isOpen?: boolean;
    toggle?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen = false,
  toggle,
  ...rest
}) => {
  return (
    <StyledModal isOpen={isOpen} toggle={toggle} {...rest}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      {children}
      <div className='footer-spacer'/>
    </StyledModal>
  );
};

export default Modal;
