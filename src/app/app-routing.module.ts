import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { ShowallComponent } from './showall/showall.component';

const routes: Routes = [
  { path: 'app-addnew', component: AddnewComponent },
  { path: 'app-showall', component: ShowallComponent },
  { path: 'app-addnew/:enroll/:semester', component: AddnewComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
