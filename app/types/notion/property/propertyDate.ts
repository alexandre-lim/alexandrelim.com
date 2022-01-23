import { TimeZoneRequest } from '../timeZoneRequest';

export type PropertyDate = {
  type: 'date';
  date: {
    start: string;
    end: string | null;
    time_zone: TimeZoneRequest | null;
  } | null;
  id: string;
};
