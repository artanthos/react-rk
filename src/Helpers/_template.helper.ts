import {format, parseISO} from 'date-fns';

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);
  return format(date, 'dd/MM/yyyy HH:mm');
};


export const offset = new Date().getTimezoneOffset() * 60000;
export const localTime = new Date(Date.now() - offset).toISOString();
