import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configService } from './config/config.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TasksModule } from './modules/tasks/tasks.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TasksModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
