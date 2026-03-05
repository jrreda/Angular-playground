import { NgModule } from '@angular/core';
import { App } from './app';
import { User } from './user/user';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, User, HeaderComponent],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule],
})
export class AppModule { }
