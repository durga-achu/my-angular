import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './find/find.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: CreateComponent},
  { path: 'login', component: FindComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
