import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CoursesService } from '../courses.service';
import * as CourseActions from './course.actions';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CourseActions.loadingCourses),
      mergeMap(() =>
        this.coursesService.getCourses().pipe(
          map((courses) => CourseActions.loadingCoursesSuccess({ courses }))
          //       catchError((error, caught) =>
          //         of(CourseActions.loadingCoursesFailure({ error }))
          //       )
        )
      )
    );
  });

  UpdateCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CourseActions.UpdateCurrentCourse),
      mergeMap((action) =>
        this.coursesService.updateCourse(action.course).pipe(
          map((course) => CourseActions.UpdateCurrentCourseSuccess({ course }))
          //       catchError((error, caught) =>
          //         of(CourseActions.loadingCoursesFailure({ error }))
          //       )
        )
      )
    );
  });
}
