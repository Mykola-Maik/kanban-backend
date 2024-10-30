import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Statuses } from 'src/types';

@Schema()
export class Todo {
  @Prop({ unique: true, required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  assignee: string;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ required: true })
  status: Statuses;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
