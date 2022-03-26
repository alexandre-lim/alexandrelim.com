import {
  GetPageResponsePropertyValueDate,
  GetPageResponsePropertyValueLastEditedTime,
  GetPageResponsePropertyValueMultiSelect,
  GetPageResponsePropertyValueRichText,
  GetPageResponsePropertyValueSelect,
  GetPageResponsePropertyValueTitle,
} from './getPageResponse';

export enum BlogProperties {
  Title = 'Title',
  Status = 'Status',
  Slug = 'Slug',
}

export enum Status {
  Published = 'Published',
  Draft = 'Draft',
}

export interface ArticlesData {
  id: string;
  properties: {
    Edited: GetPageResponsePropertyValueLastEditedTime;
    Published: GetPageResponsePropertyValueDate;
    Slug: GetPageResponsePropertyValueSelect;
    Summary: GetPageResponsePropertyValueRichText;
    Tags: GetPageResponsePropertyValueMultiSelect;
    Title: GetPageResponsePropertyValueTitle;
  };
}

export type ArticleProperties = Omit<ArticlesData, 'id'>;
