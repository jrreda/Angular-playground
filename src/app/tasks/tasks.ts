import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { type Task as TaskModel, type NewTask as NewTaskModel } from './task/task.model';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  providers: [TasksService],
})
export class Tasks {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get filteredTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onCreateTask(newTask: NewTaskModel) {
    this.tasksService.addTask(newTask, this.userId);

    this.isAddingTask = false;
  }
}
