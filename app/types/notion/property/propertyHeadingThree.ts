import { Color, EmptyObject, IdRequest, TextRequest } from '../common';
import { TimeZoneRequest } from '../timeZoneRequest';

export type PropertyHeadingThree = {
  type: 'heading_3';
  heading_3: {
    text: Array<
      | {
          type: 'text';
          text: {
            content: string;
            link: {
              url: TextRequest;
            } | null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: Color;
          };
          plain_text: string;
          href: string | null;
        }
      | {
          type: 'mention';
          mention:
            | {
                type: 'user';
                user:
                  | {
                      id: IdRequest;
                      object: 'user';
                    }
                  | {
                      type: 'person';
                      person: {
                        email?: string;
                      };
                      name: string | null;
                      avatar_url: string | null;
                      id: IdRequest;
                      object: 'user';
                    }
                  | {
                      type: 'bot';
                      bot:
                        | EmptyObject
                        | {
                            owner:
                              | {
                                  type: 'user';
                                  user:
                                    | {
                                        type: 'person';
                                        person: {
                                          email: string;
                                        };
                                        name: string | null;
                                        avatar_url: string | null;
                                        id: IdRequest;
                                        object: 'user';
                                      }
                                    | {
                                        id: IdRequest;
                                        object: 'user';
                                      };
                                }
                              | {
                                  type: 'workspace';
                                  workspace: true;
                                };
                          };
                      name: string | null;
                      avatar_url: string | null;
                      id: IdRequest;
                      object: 'user';
                    };
              }
            | {
                type: 'date';
                date: {
                  start: string;
                  end: string | null;
                  time_zone: TimeZoneRequest | null;
                };
              }
            | {
                type: 'link_preview';
                link_preview: {
                  url: TextRequest;
                };
              }
            | {
                type: 'page';
                page: {
                  id: IdRequest;
                };
              }
            | {
                type: 'database';
                database: {
                  id: IdRequest;
                };
              };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: Color;
          };
          plain_text: string;
          href: string | null;
        }
      | {
          type: 'equation';
          equation: {
            expression: TextRequest;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: Color;
          };
          plain_text: string;
          href: string | null;
        }
    >;
  };
  object: 'block';
  id: string;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
  archived: boolean;
};