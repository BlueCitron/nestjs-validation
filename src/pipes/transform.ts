import { TransformFnParams } from 'class-transformer/types/interfaces';
import { BadRequestException } from '@nestjs/common';

export const COMMA_SEPARATED_VALUE:(required: boolean) => (params: TransformFnParams) => any = (required: boolean) => {

  return ({ value, key }: TransformFnParams) => {

    if (required && !value) {
      throw new BadRequestException(`${key} is required.`);
    }

    if (typeof value === 'string') {
      return value.split(',').filter(it => !!it);
    }

    throw new BadRequestException(`${key} is must be a string.`);
  };
};

export const COMMA_SEPARATED_VALUE2: (params: TransformFnParams) => any = ({ value }: TransformFnParams) => {
  if (typeof value === 'string') {
    return value.split(',').filter(it => !!it);
  }
};