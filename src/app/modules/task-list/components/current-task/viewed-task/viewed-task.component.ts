import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../../../../shared/services/tasks.service';

import { Task } from 'src/app/shared/models/task';
import { NewTask } from 'src/app/shared/models/new-task';

@Component({
  selector: 'app-viewed-task',
  templateUrl: './viewed-task.component.html',
  styleUrls: ['./viewed-task.component.css']
})
export class ViewedTaskComponent implements OnInit {
  public tasks: Task[];
  public model: NewTask = new NewTask();
  private tasksRoute = 'http://localhost:3000/task';
  constructor(private http: HttpClient, private tasksService: TasksService) { 
    this.tasks = tasksService.tasks;
  }

  

  ngOnInit() {
    
  }

}
