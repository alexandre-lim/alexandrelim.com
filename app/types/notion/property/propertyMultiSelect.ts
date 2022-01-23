import { SimpleColor, StringRequest } from '../common';

export type PropertyMultiSelect = {
  type: 'multi_select';
  multi_select: Array<{
    id: StringRequest;
    name: StringRequest;
    color: SimpleColor;
  }>;
  id: string;
};
