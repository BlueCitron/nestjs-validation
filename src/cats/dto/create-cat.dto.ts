import { ArrayUnique, IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CAT_COLOR } from '../cat-color';
import { Transform } from 'class-transformer';
import { COMMA_SEPARATED_VALUE } from '../../pipes/transform';


export class CreateCatDto {

  @IsOptional()
  @IsString()
  name: string;

  // Comma Separated String
  // ex: "a,b,c"
  // @IsArray()
  // @IsNotEmpty()
  // @Transform(COMMA_SEPARATED_VALUE(false))
  // color1: CAT_COLOR[];

  // @ArrayUnique({ each: true })
  @IsEnum(CAT_COLOR, { each: true })
  color1: CAT_COLOR[];

}
