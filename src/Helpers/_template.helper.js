import format from 'date-fns/format';


export const formatDate = (date) => format(new Date(date), 'dd/MM/yyyy HH:mm');

export const offset = (new Date()).getTimezoneOffset() * 60000;
export const localTime = (new Date(Date.now() - offset)).toISOString();
