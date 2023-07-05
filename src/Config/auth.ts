import { BroadcastChannel } from 'broadcast-channel';
import { deleteAllCookies } from 'src/Helpers';

const logoutChannel = new BroadcastChannel('logout');

export const BroadcastLogout = () => {
  localStorage.removeItem('persist:root');
  logoutChannel.postMessage('Logout');
  deleteAllCookies();
  localStorage.clear();
  window.location.href = `${window.location.origin}/`;
};

export const BroadcastLogoutAllTabs = () => {
  logoutChannel.onmessage = () => {
    BroadcastLogout();
    logoutChannel.close();
  };
};
