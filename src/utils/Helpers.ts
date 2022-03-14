import { DATE_TIME_HOUR } from 'src/constants/app';
import moment from 'src/libs/moment';

export const getOriginUrl = () => {
  const location = window.location;

  return `${location.origin}`;
};

export const formatDate = (
  day: string | null,
  format: string = DATE_TIME_HOUR,
  defaultValue: string = '-',
) => {
  if (!day) return defaultValue;

  if (moment(day).isValid()) {
    return moment(day).format(format);
  }

  return defaultValue;
};

export const formatPrice = (
  num: number | string,
  precision: number = 2,
  defaultValue: string = '-',
) => {
  if (!num) return defaultValue;

  if (typeof num !== 'number') {
    num = Number(num);
  }

  return (
    num.toLocaleString('ko-KR', { maximumFractionDigits: precision }) + '원'
  );
};

export const formatCount = (
  num?: number | null,
  prefix: string = '회',
  defaultValue: string = '-',
) => {
  if (typeof num === 'number') return num.toLocaleString() + prefix;

  return defaultValue;
};

export const roundNumber = (num: number, precision: number = 2) => {
  if (!num) return '';

  const pow = Math.pow(10, precision);
  return Math.round(num * pow) / pow;
};

export const isSharingRevenue = (num: number | string | boolean) => {
  return num > 0 ? 'Y' : 'N';
};

export const formatToken = (value = '0', token = 'FTSY') => {
  return `${value} ${token}`;
};
