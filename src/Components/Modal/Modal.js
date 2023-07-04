import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader } from 'reactstrap';
import { StyledModal } from './Modal.style';

const Modal = (props) => {
  const {
    title, children, isOpen, toggle,
  } = props;

  return (
    <StyledModal isOpen={isOpen} toggle={toggle} {...props}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      {children}
      <div className='footer-spacer' />
    </StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};

Modal.defaultProps = {
  title: undefined,
  isOpen: false,
  toggle: undefined,
};

export default Modal;
