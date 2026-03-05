import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() id!: string
  @Input({ required: true }) name!: string
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.id);
  }
}
