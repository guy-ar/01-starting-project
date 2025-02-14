import { Component, EventEmitter, Output, signal, output, Inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../model/task.model';
import { TaskService } from '../tasks.service';

@Component({
  standalone: true,
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // @Output() cancel = new EventEmitter<void>() // change name
  @Output() close = new EventEmitter<void>()
  //@Output() addTask = new EventEmitter<NewTask>() // replaced with tasks service
  @Input({required: true})  userId!: string;
  //enteredTitle = signal(''); // for use of signal - this is the only change - no change in template
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  constructor(private taskservice: TaskService) {}
  
  
  onCancel() {
    //this.cancel.emit();
    this.close.emit();
  }

  onSubmit() {
    const newTask : NewTask = {title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate};

    this.taskservice.addTask(newTask, this.userId);
        //this.addTask.emit(newTask);
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDate = '';
    this.close.emit();
  }

}
