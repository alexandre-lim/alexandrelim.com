import { SimpleColor, StringRequest } from '../common';

export type PropertySelect = {
  type: 'select';
  select: {
    id: StringRequest;
    name: StringRequest;
    color: SimpleColor;
  } | null;
  id: string;
};
