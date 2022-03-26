import {
  GetPageResponsePropertyValueDate,
  GetPageResponsePropertyValueLastEditedTime,
  GetPageResponsePropertyValueMultiSelect,
  GetPageResponsePropertyValueRichText,
  GetPageResponsePropertyValueSelect,
  GetPageResponsePropertyValueTitle,
  GetPageResponsePropertyValueFiles,
} from './getPageResponse';

export enum CoursesProperties {
  Title = 'Title',
  Status = 'Status',
  Slug = 'Slug',
}

export enum Status {
  Published = 'Published',
  Draft = 'Draft',
}

export interface CoursesData {
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
    Cover_Alternative: GetPageResponsePropertyValueRichText;
    Year_Formation: GetPageResponsePropertyValueSelect;
  };
}

export type CourseProperties = Omit<CoursesData, 'id'>;
