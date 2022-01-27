import { EmptyObject, IdRequest, StringRequest, TextRequest } from './common';
import { EmojiRequest } from './emojiRequest';
import { TimeZoneRequest } from './timeZoneRequest';

export type GetPageResponse = {
  parent:
    | {
        type: 'database_id';
        database_id: IdRequest;
      }
    | {
        type: 'page_id';
        page_id: IdRequest;
      }
    | {
        type: 'workspace';
        workspace: true;
      };
  properties: Record<
    string,
    | {
        type: 'title';
        title: Array<
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
                color:
                  | 'default'
                  | 'gray'
                  | 'brown'
                  | 'orange'
                  | 'yellow'
                  | 'green'
                  | 'blue'
                  | 'purple'
                  | 'pink'
                  | 'red'
                  | 'gray_background'
                  | 'brown_background'
                  | 'orange_background'
                  | 'yellow_background'
                  | 'green_background'
                  | 'blue_background'
                  | 'purple_background'
                  | 'pink_background'
                  | 'red_background';
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
                color:
                  | 'default'
                  | 'gray'
                  | 'brown'
                  | 'orange'
                  | 'yellow'
                  | 'green'
                  | 'blue'
                  | 'purple'
                  | 'pink'
                  | 'red'
                  | 'gray_background'
                  | 'brown_background'
                  | 'orange_background'
                  | 'yellow_background'
                  | 'green_background'
                  | 'blue_background'
                  | 'purple_background'
                  | 'pink_background'
                  | 'red_background';
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
                color:
                  | 'default'
                  | 'gray'
                  | 'brown'
                  | 'orange'
                  | 'yellow'
                  | 'green'
                  | 'blue'
                  | 'purple'
                  | 'pink'
                  | 'red'
                  | 'gray_background'
                  | 'brown_background'
                  | 'orange_background'
                  | 'yellow_background'
                  | 'green_background'
                  | 'blue_background'
                  | 'purple_background'
                  | 'pink_background'
                  | 'red_background';
              };
              plain_text: string;
              href: string | null;
            }
        >;
        id: string;
      }
    | {
        type: 'rich_text';
        rich_text: Array<
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
                color:
                  | 'default'
                  | 'gray'
                  | 'brown'
                  | 'orange'
                  | 'yellow'
                  | 'green'
                  | 'blue'
                  | 'purple'
                  | 'pink'
                  | 'red'
                  | 'gray_background'
                  | 'brown_background'
                  | 'orange_background'
                  | 'yellow_background'
                  | 'green_background'
                  | 'blue_background'
                  | 'purple_background'
                  | 'pink_background'
                  | 'red_background';
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
                color:
                  | 'default'
                  | 'gray'
                  | 'brown'
                  | 'orange'
                  | 'yellow'
                  | 'green'
                  | 'blue'
                  | 'purple'
                  | 'pink'
                  | 'red'
                  | 'gray_background'
                  | 'brown_background'
                  | 'orange_background'
                  | 'yellow_background'
                  | 'green_background'
                  | 'blue_background'
                  | 'purple_background'
                  | 'pink_background'
                  | 'red_background';
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
                color:
                  | 'default'
                  | 'gray'
                  | 'brown'
                  | 'orange'
                  | 'yellow'
                  | 'green'
                  | 'blue'
                  | 'purple'
                  | 'pink'
                  | 'red'
                  | 'gray_background'
                  | 'brown_background'
                  | 'orange_background'
                  | 'yellow_background'
                  | 'green_background'
                  | 'blue_background'
                  | 'purple_background'
                  | 'pink_background'
                  | 'red_background';
              };
              plain_text: string;
              href: string | null;
            }
        >;
        id: string;
      }
    | {
        type: 'number';
        number: number | null;
        id: string;
      }
    | {
        type: 'url';
        url: string | null;
        id: string;
      }
    | {
        type: 'select';
        select: {
          id: StringRequest;
          name: StringRequest;
          color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
        } | null;
        id: string;
      }
    | {
        type: 'multi_select';
        multi_select: Array<{
          id: StringRequest;
          name: StringRequest;
          color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
        }>;
        id: string;
      }
    | {
        type: 'people';
        people: Array<
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
            }
        >;
        id: string;
      }
    | {
        type: 'email';
        email: string | null;
        id: string;
      }
    | {
        type: 'phone_number';
        phone_number: string | null;
        id: string;
      }
    | {
        type: 'date';
        date: {
          start: string;
          end: string | null;
          time_zone: TimeZoneRequest | null;
        } | null;
        id: string;
      }
    | {
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
      }
    | {
        type: 'checkbox';
        checkbox: boolean;
        id: string;
      }
    | {
        type: 'formula';
        formula:
          | {
              type: 'string';
              string: string | null;
            }
          | {
              type: 'date';
              date: {
                start: string;
                end: string | null;
                time_zone: TimeZoneRequest | null;
              } | null;
            }
          | {
              type: 'number';
              number: number | null;
            }
          | {
              type: 'boolean';
              boolean: boolean | null;
            };
        id: string;
      }
    | {
        type: 'relation';
        relation: Array<{
          id: string;
        }>;
        id: string;
      }
    | {
        type: 'created_time';
        created_time: string;
        id: string;
      }
    | {
        type: 'created_by';
        created_by:
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
        id: string;
      }
    | {
        type: 'last_edited_time';
        last_edited_time: string;
        id: string;
      }
    | {
        type: 'last_edited_by';
        last_edited_by:
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
        id: string;
      }
    | {
        type: 'rollup';
        rollup:
          | {
              type: 'number';
              number: number | null;
              function:
                | 'count'
                | 'count_values'
                | 'empty'
                | 'not_empty'
                | 'unique'
                | 'show_unique'
                | 'percent_empty'
                | 'percent_not_empty'
                | 'sum'
                | 'average'
                | 'median'
                | 'min'
                | 'max'
                | 'range'
                | 'earliest_date'
                | 'latest_date'
                | 'date_range'
                | 'checked'
                | 'unchecked'
                | 'percent_checked'
                | 'percent_unchecked'
                | 'show_original';
            }
          | {
              type: 'date';
              date: {
                start: string;
                end: string | null;
                time_zone: TimeZoneRequest | null;
              } | null;
              function:
                | 'count'
                | 'count_values'
                | 'empty'
                | 'not_empty'
                | 'unique'
                | 'show_unique'
                | 'percent_empty'
                | 'percent_not_empty'
                | 'sum'
                | 'average'
                | 'median'
                | 'min'
                | 'max'
                | 'range'
                | 'earliest_date'
                | 'latest_date'
                | 'date_range'
                | 'checked'
                | 'unchecked'
                | 'percent_checked'
                | 'percent_unchecked'
                | 'show_original';
            }
          | {
              type: 'array';
              array: Array<
                | {
                    type: 'title';
                    title: Array<
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
                            color:
                              | 'default'
                              | 'gray'
                              | 'brown'
                              | 'orange'
                              | 'yellow'
                              | 'green'
                              | 'blue'
                              | 'purple'
                              | 'pink'
                              | 'red'
                              | 'gray_background'
                              | 'brown_background'
                              | 'orange_background'
                              | 'yellow_background'
                              | 'green_background'
                              | 'blue_background'
                              | 'purple_background'
                              | 'pink_background'
                              | 'red_background';
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
                            color:
                              | 'default'
                              | 'gray'
                              | 'brown'
                              | 'orange'
                              | 'yellow'
                              | 'green'
                              | 'blue'
                              | 'purple'
                              | 'pink'
                              | 'red'
                              | 'gray_background'
                              | 'brown_background'
                              | 'orange_background'
                              | 'yellow_background'
                              | 'green_background'
                              | 'blue_background'
                              | 'purple_background'
                              | 'pink_background'
                              | 'red_background';
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
                            color:
                              | 'default'
                              | 'gray'
                              | 'brown'
                              | 'orange'
                              | 'yellow'
                              | 'green'
                              | 'blue'
                              | 'purple'
                              | 'pink'
                              | 'red'
                              | 'gray_background'
                              | 'brown_background'
                              | 'orange_background'
                              | 'yellow_background'
                              | 'green_background'
                              | 'blue_background'
                              | 'purple_background'
                              | 'pink_background'
                              | 'red_background';
                          };
                          plain_text: string;
                          href: string | null;
                        }
                    >;
                  }
                | {
                    type: 'rich_text';
                    rich_text: Array<
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
                            color:
                              | 'default'
                              | 'gray'
                              | 'brown'
                              | 'orange'
                              | 'yellow'
                              | 'green'
                              | 'blue'
                              | 'purple'
                              | 'pink'
                              | 'red'
                              | 'gray_background'
                              | 'brown_background'
                              | 'orange_background'
                              | 'yellow_background'
                              | 'green_background'
                              | 'blue_background'
                              | 'purple_background'
                              | 'pink_background'
                              | 'red_background';
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
                            color:
                              | 'default'
                              | 'gray'
                              | 'brown'
                              | 'orange'
                              | 'yellow'
                              | 'green'
                              | 'blue'
                              | 'purple'
                              | 'pink'
                              | 'red'
                              | 'gray_background'
                              | 'brown_background'
                              | 'orange_background'
                              | 'yellow_background'
                              | 'green_background'
                              | 'blue_background'
                              | 'purple_background'
                              | 'pink_background'
                              | 'red_background';
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
                            color:
                              | 'default'
                              | 'gray'
                              | 'brown'
                              | 'orange'
                              | 'yellow'
                              | 'green'
                              | 'blue'
                              | 'purple'
                              | 'pink'
                              | 'red'
                              | 'gray_background'
                              | 'brown_background'
                              | 'orange_background'
                              | 'yellow_background'
                              | 'green_background'
                              | 'blue_background'
                              | 'purple_background'
                              | 'pink_background'
                              | 'red_background';
                          };
                          plain_text: string;
                          href: string | null;
                        }
                    >;
                  }
                | {
                    type: 'number';
                    number: number | null;
                  }
                | {
                    type: 'url';
                    url: string | null;
                  }
                | {
                    type: 'select';
                    select: {
                      id: StringRequest;
                      name: StringRequest;
                      color:
                        | 'default'
                        | 'gray'
                        | 'brown'
                        | 'orange'
                        | 'yellow'
                        | 'green'
                        | 'blue'
                        | 'purple'
                        | 'pink'
                        | 'red';
                    } | null;
                  }
                | {
                    type: 'multi_select';
                    multi_select: Array<{
                      id: StringRequest;
                      name: StringRequest;
                      color:
                        | 'default'
                        | 'gray'
                        | 'brown'
                        | 'orange'
                        | 'yellow'
                        | 'green'
                        | 'blue'
                        | 'purple'
                        | 'pink'
                        | 'red';
                    }>;
                  }
                | {
                    type: 'people';
                    people: Array<
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
                        }
                    >;
                  }
                | {
                    type: 'email';
                    email: string | null;
                  }
                | {
                    type: 'phone_number';
                    phone_number: string | null;
                  }
                | {
                    type: 'date';
                    date: {
                      start: string;
                      end: string | null;
                      time_zone: TimeZoneRequest | null;
                    } | null;
                  }
                | {
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
                  }
                | {
                    type: 'checkbox';
                    checkbox: boolean;
                  }
                | {
                    type: 'formula';
                    formula:
                      | {
                          type: 'string';
                          string: string | null;
                        }
                      | {
                          type: 'date';
                          date: {
                            start: string;
                            end: string | null;
                            time_zone: TimeZoneRequest | null;
                          } | null;
                        }
                      | {
                          type: 'number';
                          number: number | null;
                        }
                      | {
                          type: 'boolean';
                          boolean: boolean | null;
                        };
                  }
                | {
                    type: 'relation';
                    relation: Array<{
                      id: string;
                    }>;
                  }
                | {
                    type: 'created_time';
                    created_time: string;
                  }
                | {
                    type: 'created_by';
                    created_by:
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
                    type: 'last_edited_time';
                    last_edited_time: string;
                  }
                | {
                    type: 'last_edited_by';
                    last_edited_by:
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
              >;
              function:
                | 'count'
                | 'count_values'
                | 'empty'
                | 'not_empty'
                | 'unique'
                | 'show_unique'
                | 'percent_empty'
                | 'percent_not_empty'
                | 'sum'
                | 'average'
                | 'median'
                | 'min'
                | 'max'
                | 'range'
                | 'earliest_date'
                | 'latest_date'
                | 'date_range'
                | 'checked'
                | 'unchecked'
                | 'percent_checked'
                | 'percent_unchecked'
                | 'show_original';
            }
          | {
              type: 'unsupported';
              unsupported: EmptyObject;
              function:
                | 'count'
                | 'count_values'
                | 'empty'
                | 'not_empty'
                | 'unique'
                | 'show_unique'
                | 'percent_empty'
                | 'percent_not_empty'
                | 'sum'
                | 'average'
                | 'median'
                | 'min'
                | 'max'
                | 'range'
                | 'earliest_date'
                | 'latest_date'
                | 'date_range'
                | 'checked'
                | 'unchecked'
                | 'percent_checked'
                | 'percent_unchecked'
                | 'show_original';
            };
        id: string;
      }
  >;
  icon:
    | {
        type: 'emoji';
        emoji: EmojiRequest;
      }
    | null
    | {
        type: 'external';
        external: {
          url: TextRequest;
        };
      }
    | null
    | {
        type: 'file';
        file: {
          url: string;
          expiry_time: string;
        };
      }
    | null;
  cover:
    | {
        type: 'external';
        external: {
          url: TextRequest;
        };
      }
    | null
    | {
        type: 'file';
        file: {
          url: string;
          expiry_time: string;
        };
      }
    | null;
  object: 'page';
  id: string;
  created_time: string;
  last_edited_time: string;
  archived: boolean;
  url: string;
};
