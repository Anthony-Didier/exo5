import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { CatsComponent } from './pages/cats/cats.component';

const routes: Routes = [
    {path:"", component:CatsComponent},
    {path:"form", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
