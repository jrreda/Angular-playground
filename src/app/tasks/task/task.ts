import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task as TaskModel } from './task.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskModel;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
