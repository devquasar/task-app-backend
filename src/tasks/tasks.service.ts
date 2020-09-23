import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Tasks } from '../model/tasks.entity';
import { TasksDTO } from './tasks.dto';
import { User } from '../user.decorator';

@Injectable()
export class TasksService extends TypeOrmCrudService<Tasks> {
  constructor(@InjectRepository(Tasks) repo) {
    super(repo);
  }
}
