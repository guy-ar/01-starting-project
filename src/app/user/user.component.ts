import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from '../model/user.model';
import { CardComponent } from "../shared/card/card.component";

const randoIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required : true}) id!: string;
  // @Input({required : true}) avatar!: string; 
  // @Input({required : true}) name!: string;

  @Input({required : true}) user!: User;
  @Input({required :true}) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  // option with output new mode - still event emitter
  // selectUser = output<string>();

  // option with input signal
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imgPath = computed(() => 'assets/users/' + this.avatar());
  
  // option with selected user instead input
  // selectedUser = DUMMY_USERS[randoIndex];
  
  // option with selected user as signal instead input
  // selectedUser = signal(DUMMY_USERS[randoIndex]);
  // imgPath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  
  // no signal - regaulr input
  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  
  onUserSelected() {
    // without signal - but with selected user 
    // //this.selectedUser  = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
    // using selected user as signal
    // this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
    // console.log('User selected: ', this.selectedUser);
    this.selectUser.emit(this.user.id);
  }
}
