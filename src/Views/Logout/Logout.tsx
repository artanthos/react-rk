import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Loading} from 'src/Components';
import {clearToken} from 'src/Redux/features/auth/authSlice';
import {BroadcastLogout} from 'src/Config/auth';
import {RESET_STATE_ACTION_TYPE} from 'src/Redux/actions';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(clearToken());
    dispatch({type: RESET_STATE_ACTION_TYPE});
    BroadcastLogout();
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <Loading width={10} height={10}/>
  );
};

export default Logout;
