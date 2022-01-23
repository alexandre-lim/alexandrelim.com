import { EmptyObject } from '../common';

export type PropertyDivider = {
  type: 'divider';
  divider: EmptyObject;
  object: 'block';
  id: string;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
  archived: boolean;
};
