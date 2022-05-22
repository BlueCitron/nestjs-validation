import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { CAT_COLOR } from '../cat-color';
import { Transform } from 'class-transformer';
import { COMMA_SEPARATED_VALUE2 } from '../../pipes/transform';

export class FindAllCatDto {
  // @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(CAT_COLOR, { each: true })
  @Transform(COMMA_SEPARATED_VALUE2)
  color1: CAT_COLOR[];

}