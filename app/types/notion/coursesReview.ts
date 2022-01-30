import {
  PropertyDate,
  PropertyFiles,
  PropertyLastEditedTime,
  PropertyMultiSelect,
  PropertyRichText,
  PropertySelect,
  PropertyTitle,
} from './property';

export enum CoursesReviewProperties {
  Title = 'Title',
  Status = 'Status',
  Slug = 'Slug',
}

export enum Status {
  Published = 'Published',
  Draft = 'Draft',
}

export interface CoursesReviewData {
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
    Cover_Alternative: PropertyRichText;
    Year_Formation: PropertySelect;
  };
}

export type CourseReviewProperties = Omit<CoursesReviewData, 'id'>;
