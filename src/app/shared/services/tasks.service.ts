import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/task';
import { NewTask } from '../models/new-task';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks: Task[];
  public model: NewTask = new NewTask();
  private tasksRoute = 'http://localhost:3000/task';

  constructor(private http: HttpClient) { }

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }

  onSubmit() {
    this.http.post(this.tasksRoute, this.model).subscribe(res => 
    this.getTasks())
  }

  onTaskComplete(taskId) {
    this.http.delete<Task[]>(`http://localhost:3000/task/${taskId}`)
    .subscribe( res => this.getTasks())
  }
  
}
