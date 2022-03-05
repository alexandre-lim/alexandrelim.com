import {
  PropertyDate,
  PropertyFiles,
  PropertyLastEditedTime,
  PropertyMultiSelect,
  PropertyRichText,
  PropertySelect,
  PropertyTitle,
} from './property';

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

export type CourseProperties = Omit<CoursesData, 'id'>;
