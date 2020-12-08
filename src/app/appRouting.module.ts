import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VedioComponent } from './vedio.component';
import { HeadComponent } from './head.component';

const routes: Routes = [
  { path: 'head',  component: HeadComponent },
  { path: 'Vedio',  component: VedioComponent },
  { path: '', redirectTo: '/head', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
