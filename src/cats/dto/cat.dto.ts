import { ApiProperty } from '@nestjs/swagger';
import { PickType } from '@nestjs/swagger/dist';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '123123',
    description: 'id',
  })
  id: string;
}
