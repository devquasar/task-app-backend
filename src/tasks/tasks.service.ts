import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tasks } from '../model/tasks.entity';
import { TasksDTO } from './tasks.dto';
import { User } from '../user.decorator';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks) private readonly repo: Repository<Tasks>,
  ) {}
  public async getAll(): Promise<TasksDTO[]> {
    return await this.repo
      .find()
      .then(tasks => tasks.map(e => TasksDTO.fromEntity(e)));
  }

  public async create(dto: TasksDTO, user: User): Promise<TasksDTO> {
    return this.repo
      .save(TasksDTO.toEntity(dto, user))
      .then(e => TasksDTO.fromEntity(e));
  }
}
