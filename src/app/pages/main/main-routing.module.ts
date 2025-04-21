import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookFinderComponent } from '../book-finder/book-finder.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: 'bookfinder', component: BookFinderComponent },
  {
    path: 'bookdetails',
    component: BookDetailsComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
