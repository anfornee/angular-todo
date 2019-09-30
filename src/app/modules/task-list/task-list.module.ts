import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';

import { TaskListComponent } from './task-list/task-list.component';
import { CurrentTaskComponent } from './components/current-task/current-task.component';
import { ViewedTaskComponent } from './components/current-task/viewed-task/viewed-task.component';

@NgModule({
  declarations: [TaskListComponent, CurrentTaskComponent, ViewedTaskComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, AppRoutingModule],
  exports: [TaskListComponent, CurrentTaskComponent, ViewedTaskComponent]
})
export class TaskListModule { }
