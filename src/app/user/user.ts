import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() id!: string
  @Input({ required: true }) name!: string
  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.id);
  }
}
