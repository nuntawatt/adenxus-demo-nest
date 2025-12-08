import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ 
    status: 201, 
    description: 'User successfully created',
    type: User 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Bad Request - Invalid input data' 
  })
  create(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of all users',
    type: [User] 
  })
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ 
    name: 'id', 
    description: 'User ID',
    type: 'number' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'User found',
    type: User 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user information' })
  @ApiParam({ 
    name: 'id', 
    description: 'User ID',
    type: 'number' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'User successfully updated',
    type: User 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Bad Request - Invalid input data' 
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): User {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete user' })
  @ApiParam({ 
    name: 'id', 
    description: 'User ID',
    type: 'number' 
  })
  @ApiResponse({ 
    status: 204, 
    description: 'User successfully deleted' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  remove(@Param('id') id: string): void {
    this.usersService.remove(+id);
  }
}
