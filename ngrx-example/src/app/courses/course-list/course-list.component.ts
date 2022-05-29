import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../models';
import * as courseActions from '../state/course.actions';
import { State } from '../state/course.reducer';
import {
  getCourses,
  getCurrentCourse,
  getShowDates,
} from '../state/course.selectors';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  data$: Observable<Course[]>;
  selectedItem$: Observable<Course>;
  showDates$: Observable<boolean>;

  constructor(private readonly store: Store<State>) {}

  ngOnInit(): void {
    this.showDates$ = this.store.select(getShowDates);
    this.data$ = this.store.select(getCourses);
    this.selectedItem$ = this.store.select(getCurrentCourse);
    this.store.dispatch(courseActions.loadingCourses());
  }

  onSelectionChanged(course: Course): void {
    this.store.dispatch(courseActions.setCurrentCourse({ course }));
  }

  setShowDates(): void {
    this.store.dispatch(courseActions.toggleDates());
  }
}
