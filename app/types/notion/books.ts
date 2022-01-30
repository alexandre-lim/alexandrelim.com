import {
  PropertyDate,
  PropertyFiles,
  PropertyLastEditedTime,
  PropertyMultiSelect,
  PropertyRichText,
  PropertySelect,
  PropertyTitle,
} from './property';

export enum BooksProperties {
  Title = 'Title',
  Status = 'Status',
  Slug = 'Slug',
}

export enum Status {
  Published = 'Published',
  Draft = 'Draft',
}

export interface BooksData {
  id: string;
  properties: {
    Edited: PropertyLastEditedTime;
    Published: PropertyDate;
    Slug: PropertySelect;
    Summary: PropertyRichText;
    Tags: PropertyMultiSelect;
    Title: PropertyTitle;
    Author: PropertySelect;
    Cover: PropertyFiles;
  };
}

export type BookProperties = Omit<BooksData, 'id'>;
