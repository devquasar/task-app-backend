import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Tasks } from '../model/tasks.entity';
import { User } from '../user.decorator';

export class TasksDTO implements Readonly<TasksDTO> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  status: string;

  @ApiProperty({ required: true })
  @IsString()
  date: string;

  @ApiProperty()
  @IsString()
  description: string;

  public static from(dto: Partial<TasksDTO>) {
    const it = new TasksDTO();
    it.id = dto.id;
    it.title = dto.title;
    it.status = dto.status;
    it.date = dto.date;
    return it;
  }

  public static fromEntity(entity: Tasks) {
    return this.from({
      id: entity.id,
      title: entity.title,
      status: entity.status,
      date: entity.date,
    });
  }

  public static toEntity(dto: Partial<TasksDTO>, user: User = null) {
    const it = new Tasks();
    it.id = dto.id;
    it.title = dto.title;
    it.description = dto.description;
    it.status = dto.status;
    it.date = '' + new Date();
    return it;
  }
}
