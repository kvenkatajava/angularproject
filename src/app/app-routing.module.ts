import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { FetchComponent } from './fetch/fetch.component';
import { SuccessfulComponent } from './successful/successful.component';

const routes: Routes = [
{path:'add', component: AddComponent},
{path:'delete', component: DeleteComponent},
{path:'update', component: UpdateComponent},
{path:'fetch',component: FetchComponent},
{path:'successful',component: SuccessfulComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
