import { ApiProperty, PickType } from '@nestjs/swagger/dist';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Cat } from '../cats.schema';

export class CatRequestDto extends PickType(Cat, [
  'email',
  'name',
  'password',
] as const) {
  @ApiProperty({
    example: '123123',
    description: 'id',
  })
  id: string;
}
