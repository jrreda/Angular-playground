import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
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
