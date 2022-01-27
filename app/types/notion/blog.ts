import {
  PropertyDate,
  PropertyLastEditedTime,
  PropertyMultiSelect,
  PropertyRichText,
  PropertySelect,
  PropertyTitle,
} from './property';

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
    Edited: PropertyLastEditedTime;
    Published: PropertyDate;
    Slug: PropertySelect;
    Summary: PropertyRichText;
    Tags: PropertyMultiSelect;
    Title: PropertyTitle;
  };
}

export type ArticleProperties = Omit<ArticlesData, 'id'>;
