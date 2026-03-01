import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
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
