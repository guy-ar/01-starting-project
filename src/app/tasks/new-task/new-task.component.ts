import { Component, EventEmitter, Output, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../model/task.model';

@Component({
  standalone: true,
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() addTask = new EventEmitter<NewTask>()
  //enteredTitle = signal(''); // for use of signal - this is the only change - no change in template
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    const newTask : NewTask = {title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate};
    this.addTask.emit(newTask);
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDate = '';
  }

}
