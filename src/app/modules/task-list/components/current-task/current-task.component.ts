import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../../../../shared/models/task';

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.css']
})
export class CurrentTaskComponent implements OnInit {
  private goBack = "http://localhost:4200";
  @Input() task: Task;
  @Output() taskCompleted: EventEmitter<number> = new EventEmitter();
  @Output() taskViewed: EventEmitter<number> = new EventEmitter();
  
  constructor(private router: Router) { }

  onClickDelete() {
    this.taskCompleted.emit(this.task.id);
  }

  
  
  goToSelectedTask() {
    this.onClickView();
    this.router.navigate([`selected-task/:taskid${this.task.id}`]);
    console.log(this.task.id)
  }

  onClickView(){ 
    this.taskViewed.emit(this.task.id);
  }

  ngOnInit() {
  }

}
