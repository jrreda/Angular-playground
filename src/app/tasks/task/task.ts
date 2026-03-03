import { Component, Input } from '@angular/core';
import { type Task as TaskModel } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
