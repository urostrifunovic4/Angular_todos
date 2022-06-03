import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path:'', redirectTo:'/users', pathMatch:'full' },
  { path:'users', component:UsersComponent },
  { path:'todos/:userId', component:TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
