import { Injectable } from "@angular/core";
import { type Task as TaskModel, type NewTask as NewTaskModel } from "./task/task.model";

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: TaskModel[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const storageTasks = localStorage.getItem('tasks');
    if (storageTasks) {
      this.tasks = JSON.parse(storageTasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(newTask: NewTaskModel, userId: string) {
    this.tasks.unshift({
      id: crypto.randomUUID(),
      userId,
      ...newTask,
      // title: newTask.title,
      // summary: newTask.summary,
      // dueDate: newTask.dueDate,
    });
    this.saveTasksToLocalStorage();
  }

  completeTask(id: string, userId: string) {
    this.tasks = this.tasks.filter(task => task.id !== id && task.userId === userId);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
