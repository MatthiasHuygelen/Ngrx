import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

export const getCoursesState = createFeatureSelector<CourseState>('courses');

export const getShowDates = createSelector(
  getCoursesState,
  (state) => state.showDate
);

export const getCourses = createSelector(
  getCoursesState,
  (state) => state.courses
);

export const getCurrentCourse = createSelector(
  getCoursesState,
  (state) => state.currentCourse
);
