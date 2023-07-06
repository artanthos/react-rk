import React, {MouseEventHandler} from 'react';
import {useNavigate} from 'react-router-dom';
import {StyledBackButton} from './BackButton.style';

interface BackButtonProps {
    handleBackBtnClick?: () => void;
    className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({handleBackBtnClick, className = ''}) => {
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLElement> = () => {
    if (handleBackBtnClick) {
      handleBackBtnClick();
      return;
    }

    navigate(-1);
  };

  return (
    <StyledBackButton>
      <i className={`${className} bi bi-arrow-left back-icon`} onClick={handleClick}/>
    </StyledBackButton>
  );
};

export default BackButton;
