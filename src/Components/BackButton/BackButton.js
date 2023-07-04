import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { StyledBackButton } from './BackButton.style';

const BackButton = ({ handleBackBtnClick, className = '' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (handleBackBtnClick) {
      handleBackBtnClick();
      return;
    }

    navigate(-1);
  };

  return (
    <StyledBackButton>
      <i className={`${className} bi bi-arrow-left back-icon`} onClick={handleClick} />
    </StyledBackButton>
  );
};

BackButton.defaultProps = {
  handleClick: PropTypes.func,
};
export default BackButton;
