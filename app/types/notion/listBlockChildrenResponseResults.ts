import { EmptyObject, IdRequest, TextRequest } from './common';
import { EmojiRequest } from './emojiRequest';
import { LanguageRequest } from './languageRequest';
import { TimeZoneRequest } from './timeZoneRequest';

export type ListBlockChildrenResponseResults = Array<
  | {
      type: 'paragraph';
      paragraph: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'heading_1';
      heading_1: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'heading_2';
      heading_2: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'bulleted_list_item';
      bulleted_list_item: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'numbered_list_item';
      numbered_list_item: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'quote';
      quote: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'to_do';
      to_do: {
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
        checked: boolean;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'toggle';
      toggle: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'template';
      template: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'synced_block';
      synced_block: {
        synced_from: {
          type: 'block_id';
          block_id: IdRequest;
        } | null;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'child_page';
      child_page: {
        title: string;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'child_database';
      child_database: {
        title: string;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'equation';
      equation: {
        expression: string;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'code';
      code: {
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
        language: LanguageRequest;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'callout';
      callout: {
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'divider';
      divider: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'breadcrumb';
      breadcrumb: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'table_of_contents';
      table_of_contents: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'column_list';
      column_list: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'column';
      column: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'link_to_page';
      link_to_page:
        | {
            type: 'page_id';
            page_id: IdRequest;
          }
        | {
            type: 'database_id';
            database_id: IdRequest;
          };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'table';
      table: {
        has_column_header: boolean;
        has_row_header: boolean;
        table_width: number;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'table_row';
      table_row: {
        cells: Array<
          Array<
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
          >
        >;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'embed';
      embed: {
        url: string;
        caption: Array<
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'bookmark';
      bookmark: {
        url: string;
        caption: Array<
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
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'image';
      image:
        | {
            type: 'external';
            external: {
              url: TextRequest;
            };
            caption: Array<
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
            type: 'file';
            file: {
              url: string;
              expiry_time: string;
            };
            caption: Array<
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
          };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'video';
      video:
        | {
            type: 'external';
            external: {
              url: TextRequest;
            };
            caption: Array<
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
            type: 'file';
            file: {
              url: string;
              expiry_time: string;
            };
            caption: Array<
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
          };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'pdf';
      pdf:
        | {
            type: 'external';
            external: {
              url: TextRequest;
            };
            caption: Array<
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
            type: 'file';
            file: {
              url: string;
              expiry_time: string;
            };
            caption: Array<
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
          };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'file';
      file:
        | {
            type: 'external';
            external: {
              url: TextRequest;
            };
            caption: Array<
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
            type: 'file';
            file: {
              url: string;
              expiry_time: string;
            };
            caption: Array<
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
          };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'audio';
      audio:
        | {
            type: 'external';
            external: {
              url: TextRequest;
            };
            caption: Array<
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
            type: 'file';
            file: {
              url: string;
              expiry_time: string;
            };
            caption: Array<
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
          };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'link_preview';
      link_preview: {
        url: TextRequest;
      };
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
  | {
      type: 'unsupported';
      unsupported: EmptyObject;
      object: 'block';
      id: string;
      created_time: string;
      last_edited_time: string;
      has_children: boolean;
      archived: boolean;
    }
>;
next_cursor: string | null;
has_more: boolean;
