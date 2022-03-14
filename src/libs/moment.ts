import moment from 'moment-timezone';

// export default (date?: string | string[] | number[], format?: string) =>
//   format
//     ? moment(date, format).tz('Asia/Seoul')
//     : moment.tz(date, 'Asia/Seoul');

moment.tz.setDefault('Asia/Seoul');

export default moment;
