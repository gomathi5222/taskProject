import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookFinderComponent } from '../book-finder/book-finder.component';
import { LayoutComponent } from './layout/layout/layout.component';
 

@NgModule({
  declarations: [
    MainComponent,
    BookDetailsComponent,
    BookFinderComponent,
    LayoutComponent,
 
  ],
  imports: [CommonModule, MainRoutingModule,ReactiveFormsModule],
})
export class MainModule {}
