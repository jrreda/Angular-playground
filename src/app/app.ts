import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [User, HeaderComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-playground');
  protected readonly users = signal(DUMMY_USERS);
  selectedUserId = signal<string | undefined>('u1');

  get selectedUser() {
    return this.users().find(user => user.id === this.selectedUserId())!;
  }

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
