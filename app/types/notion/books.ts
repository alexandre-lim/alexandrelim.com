import {
  GetPageResponsePropertyValueDate,
  GetPageResponsePropertyValueLastEditedTime,
  GetPageResponsePropertyValueMultiSelect,
  GetPageResponsePropertyValueRichText,
  GetPageResponsePropertyValueSelect,
  GetPageResponsePropertyValueTitle,
  GetPageResponsePropertyValueFiles,
} from './getPageResponse';

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
    Edited: GetPageResponsePropertyValueLastEditedTime;
    Published: GetPageResponsePropertyValueDate;
    Slug: GetPageResponsePropertyValueSelect;
    Summary: GetPageResponsePropertyValueRichText;
    Tags: GetPageResponsePropertyValueMultiSelect;
    Title: GetPageResponsePropertyValueTitle;
    Author: GetPageResponsePropertyValueSelect;
    Cover: GetPageResponsePropertyValueFiles;
  };
}

export type BookProperties = Omit<BooksData, 'id'>;
