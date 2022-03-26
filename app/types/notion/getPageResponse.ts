import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

/** Property **/
export type FullGetPageResponse = Extract<GetPageResponse, { properties: Record<string, unknown> }>;
export type PropertyValueMap = FullGetPageResponse['properties'];
export type PropertyValue = PropertyValueMap[string];

export type PropertyValueType = PropertyValue['type'];

export type ExtractedPropertyValue<TType extends PropertyValueType> = Extract<PropertyValue, { type: TType }>;

export type GetPageResponsePropertyValueTitle = ExtractedPropertyValue<'title'>;
export type GetPageResponsePropertyValueRichText = ExtractedPropertyValue<'rich_text'>;
export type GetPageResponsePropertyValueSelect = ExtractedPropertyValue<'select'>;
export type GetPageResponsePropertyValueMultiSelect = ExtractedPropertyValue<'multi_select'>;
export type GetPageResponsePropertyValueDate = ExtractedPropertyValue<'date'>;
export type GetPageResponsePropertyValueCreatedTime = ExtractedPropertyValue<'created_time'>;
export type GetPageResponsePropertyValueLastEditedTime = ExtractedPropertyValue<'last_edited_time'>;
export type GetPageResponsePropertyValueFiles = ExtractedPropertyValue<'files'>;
