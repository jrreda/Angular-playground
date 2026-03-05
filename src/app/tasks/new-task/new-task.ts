import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type NewTask as NewTaskModel } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<NewTaskModel>();

  title = '';
  summary = '';
  dueDate = '';

  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onCreateTask() {
    this.tasksService.addTask({ title: this.title, summary: this.summary, dueDate: this.dueDate }, this.userId);
    this.close.emit();
  }
}
