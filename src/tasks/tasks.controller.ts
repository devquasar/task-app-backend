import { Controller, Get, Post, Body } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TasksDTO } from './tasks.dto';
import { User } from '../user.decorator';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  public async getAll(): Promise<TasksDTO[]> {
    return await this.service.getAll();
  }

  @Post()
  public async post(
    @User() user: User,
    @Body() dto: TasksDTO,
  ): Promise<TasksDTO> {
    return this.service.create(dto, user);
  }
}
