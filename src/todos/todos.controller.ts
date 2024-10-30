import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/CreateTodo.dto';
import mongoose from 'mongoose';
import { UpdateTodoDto } from './dto/UpdateTodo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) throw new HttpException('Todo not found', 404);

    const todo = await this.todosService.getTodoById(id);

    if (!todo) throw new HttpException('Todo not found', 404);

    return todo;
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) throw new BadRequestException('Invalid Id');

    const updatedTodo = await this.todosService.updateTodo(id, updateTodoDto);

    if (!updatedTodo) throw new NotFoundException('Todo not found');

    return updatedTodo;
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) throw new BadRequestException('Invalid Id');

    const deletedTodo = await this.todosService.deleteTodo(id);

    if (!deletedTodo) throw new NotFoundException('Todo not found');

    return;
  }
}
