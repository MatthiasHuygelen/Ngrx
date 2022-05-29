import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Course } from '../models';
import { UpdateCurrentCourse } from '../state/course.actions';
import { CourseState } from '../state/course.reducer';
import { getCurrentCourse } from '../state/course.selectors';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss'],
})
export class CourseEditComponent implements OnInit {
  course$: Observable<Course>;
  form: FormGroup;

  constructor(private readonly store: Store<CourseState>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      start: new FormControl(),
      end: new FormControl(),
    });

    this.course$ = this.store.select(getCurrentCourse).pipe(
      filter((course) => !!course),
      tap((course) => this.form.patchValue(course))
    );
  }

  save(): void {
    this.store.dispatch(UpdateCurrentCourse({ course: this.form.value }));
  }
}
