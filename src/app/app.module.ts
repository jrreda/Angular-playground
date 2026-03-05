import { NgModule } from '@angular/core';
import { App } from './app';
import { User } from './user/user';
import { HeaderComponent } from './header/header.component';
import { Tasks } from './tasks/tasks';
import { BrowserModule } from '@angular/platform-browser';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [App, User, HeaderComponent, Tasks, Task, NewTask],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule { }
