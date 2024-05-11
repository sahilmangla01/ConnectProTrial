import moment from 'moment';

export const DateFormat = dateunix => {
  // const date = moment(dateunix).add(1, 'days').format('DD/MM/YYYY');
  const date = moment(dateunix).format('DD/MM/YYYY');
  return date;
};
