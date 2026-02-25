import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  imports: [User, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-playground');
  protected readonly users = signal(DUMMY_USERS);

  onSelectUser(id: string) {
    console.log(id);
  }
}
