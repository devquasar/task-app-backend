import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksService } from './service/tasks.service';
import { TasksController } from './controller/tasks.controller';
import { Tasks } from './model/tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  providers: [TasksService],
  controllers: [TasksController],
  exports: [],
})
export class TasksModule {}
