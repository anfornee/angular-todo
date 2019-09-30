import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './modules/task-list/task-list/task-list.component';
import { ViewedTaskComponent } from './modules/task-list/components/current-task/viewed-task/viewed-task.component';

const routes: Routes = [
  
  {
    path: 'task-list',
    redirectTo: ''
  },
  {
    path: 'selected-task/:taskid/task-list',
    redirectTo: ''
  },
  {
    path: 'selected-task/:taskid',
    component: ViewedTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
