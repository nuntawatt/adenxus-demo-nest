import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    description: 'User unique identifier',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'User email address',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'User age',
    example: 25,
  })
  age: number;

  @ApiProperty({
    description: 'User creation date',
    example: '2023-12-08T14:25:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User last update date',
    example: '2023-12-08T14:25:00.000Z',
  })
  updatedAt: Date;
}
