import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/schemas/Todo.schema';
import { CreateTodoDto } from './dto/CreateTodo.dto';
import { UpdateTodoDto } from './dto/UpdateTodo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  createTodo(createTodoDto: CreateTodoDto) {
    const newTodo = new this.todoModel(createTodoDto);

    return newTodo.save();
  }

  getTodos() {
    return this.todoModel.find().exec();
  }

  getTodoById(id: string) {
    return this.todoModel.findById(id);
  }

  updateTodo(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true });
  }

  deleteTodo(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
