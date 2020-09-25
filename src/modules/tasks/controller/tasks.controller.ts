import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { TasksService } from '../service/tasks.service';
import { TasksDTO } from '../dto/tasks.dto';
import { Tasks } from '../model/tasks.entity';

@Crud({
  model: {
    type: Tasks,
  },
})
@Controller('tasks')
export class TasksController implements CrudController<Tasks> {
  constructor(public service: TasksService) {}
}
