import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { TasksService } from './tasks.service';
import { TasksDTO } from './tasks.dto';
import { User } from '../user.decorator';
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
