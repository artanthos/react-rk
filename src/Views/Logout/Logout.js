import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Loading } from 'Components';
import { clearToken } from 'Redux/features/auth/authSlice';
import { BroadcastLogout } from 'Config/auth';
import { RESET_STATE_ACTION_TYPE } from 'Redux/actions';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(clearToken());
    dispatch({ type: RESET_STATE_ACTION_TYPE });
    BroadcastLogout();
  };

  useEffect(async () => {
    await handleLogout();
  }, []);

  return (
    <Loading width={10} height={10} />
  );
};

export default Logout;
