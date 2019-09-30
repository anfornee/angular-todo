import { Component, OnInit,  ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TasksService } from '../../../shared/services/tasks.service';

import { Task } from 'src/app/shared/models/task';
import { NewTask } from 'src/app/shared/models/new-task';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @ViewChild('myForm') formValues;
  public tasks: Task[];
  public model: NewTask = new NewTask();
  private tasksRoute = 'http://localhost:3000/task';

  constructor(private http: HttpClient, private tasksService: TasksService) { }

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }

  ngOnInit() {
    this.getTasks()
  }

  onSubmit() {
    this.http.post(this.tasksRoute, this.model).subscribe(res => 
    this.getTasks())
    this.formValues.resetForm();
  }

  onTaskComplete(taskId) {
    this.http.delete<Task[]>(`http://localhost:3000/task/${taskId}`)
    .subscribe( res => this.getTasks())
  }

}
