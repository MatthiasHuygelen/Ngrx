import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CoursesBaseComponent } from './courses-base/courses-base.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { CourseReducer } from './state/course.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './state/course.effects';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseEditComponent,
    CoursesBaseComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature('courses', CourseReducer),
    EffectsModule.forFeature([CourseEffects]),
  ],
})
export class CoursesModule {}
