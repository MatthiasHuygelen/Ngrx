import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursesBaseComponent } from './courses-base/courses-base.component';

const routes = [
  {
    path: '',
    component: CoursesBaseComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CoursesRoutingModule {}
