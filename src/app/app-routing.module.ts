import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LabelMakerComponent } from './label-maker/label-maker.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'labelmaker', component: LabelMakerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
