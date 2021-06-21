import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;
  error: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      this.error = 'Please add task text';
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.error = '';
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
