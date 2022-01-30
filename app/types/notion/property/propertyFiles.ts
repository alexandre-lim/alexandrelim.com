import { StringRequest, TextRequest } from '../common';

export type PropertyFiles = {
  type: 'files';
  files: Array<
    | {
        file: {
          url: string;
          expiry_time: string;
        };
        name: StringRequest;
        type?: 'file';
      }
    | {
        external: {
          url: TextRequest;
        };
        name: StringRequest;
        type?: 'external';
      }
  >;
  id: string;
};
