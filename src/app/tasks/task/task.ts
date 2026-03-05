import { Component, Input } from '@angular/core';
import { type Task as TaskModel } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskModel;

  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.completeTask(this.task.id, this.task.userId);
  }
}
