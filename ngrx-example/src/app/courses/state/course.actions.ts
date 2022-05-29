import { createAction, props } from '@ngrx/store';
import { Course } from '../models';

export const setCurrentCourse = createAction(
  '[Courses] Set Current Course',
  props<{ course: Course }>()
);

export const toggleDates = createAction('[Courses] toggle date');

export const loadingCourses = createAction('[Courses] Loading Courses');

export const loadingCoursesSuccess = createAction(
  '[Courses] Loading Succesfully',
  props<{ courses: Course[] }>()
);

export const UpdateCurrentCourse = createAction(
  '[Courses] Update Course',
  props<{ course: Course }>()
);

export const UpdateCurrentCourseSuccess = createAction(
  '[Courses] Update Succesfully',
  props<{ course: Course }>()
);
