import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Statuses } from 'src/types';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  assignee?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dueDate?: Date;

  @IsOptional()
  @IsString()
  status?: Statuses;
}
