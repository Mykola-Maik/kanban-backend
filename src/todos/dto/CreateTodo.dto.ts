import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Statuses } from 'src/types';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  assignee: string;

  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @IsString()
  status: Statuses;
}
