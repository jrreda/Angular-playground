import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask as NewTaskModel } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<NewTaskModel>();

  title = '';
  summary = '';
  dueDate = '';

  onCancelAddTask() {
    this.cancel.emit();
  }

  onCreateTask() {
    this.create.emit({ title: this.title, summary: this.summary, dueDate: this.dueDate });
  }
}
