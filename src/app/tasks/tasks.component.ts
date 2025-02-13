import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';
import { type NewTask } from '../model/task.model'; //use type to notify this is an object type

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) userName!: string;
  @Input({required : true}) userId!: string
  isAddingTask = false;
  
  constructor(private tasksService: TaskService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  // move the logic to task using the service
  // onCompleteTask($event: string) {
  //   // need to remove task from tasks array
  //   this.tasksService.removeTask($event);
  // }

  onStartAddTask(){
   
    this.isAddingTask = true;

  }
  onCancelAddTask(){
    this.isAddingTask = false;
  }
  // no longer needed after using service instaed ouput event
  // onAddTask(taskData: NewTask) {
  //   this.tasksService.addTask(taskData, this.userId);
  //   this.isAddingTask = false;
  // }

}
