import exp from 'constants';

export const CAT_COLOR = {
  'WHITE': 'WHITE',
  'BLACK': 'BLACK',
  'GREY': 'GREY',
};

export type CAT_COLOR = typeof CAT_COLOR[keyof typeof CAT_COLOR];