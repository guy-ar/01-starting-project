import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User;

  onUserSelected(id: string) {
    console.log('User selected: ', id);
    this.selectedUser = this.users.find(user => user.id === id);
  }
  get selectedUserName() {
    if (this.selectedUser) {
      return this.selectedUser.name;
    }
    return undefined;
  }

  get selectedUserId() {
    if (this.selectedUser) {
      return this.selectedUser.id;
    }
    return '-1';
  }
}
