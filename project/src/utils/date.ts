import { MINUTES_IN_HOUR } from '../const';

export const getRunTimeFormat = (time: number): string => {
  const hours = Math.trunc(time / MINUTES_IN_HOUR);
  const minutes = time % MINUTES_IN_HOUR;

  const timeFormat = hours ? `${hours}h ${minutes}m`  : `${minutes}m`;

  return timeFormat;
};
