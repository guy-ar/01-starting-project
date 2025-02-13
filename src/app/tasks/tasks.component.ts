import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
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
  
  tasks = DUMMY_TASKS

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
  onCompleteTask($event: string) {
    // need to remove task from tasks array
    this.tasks = this.tasks.filter(task => task.id !== $event);
  }

  onStartAddTask(){
    this.isAddingTask = true;

  }
  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.userId
    });
    this.isAddingTask = false;
  }

}
