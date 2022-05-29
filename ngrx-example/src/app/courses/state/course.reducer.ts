import { createReducer, on } from '@ngrx/store';
import * as AppState from 'src/app/state/state';
import { Course } from '../models';
import * as CourseActions from './course.actions';

export interface State extends AppState.State {
  courses: CourseState;
}

export interface CourseState {
  showDate: boolean;
  courses: Course[];
  currentCourse: Course;
}

const intitialState: CourseState = {
  showDate: false,
  courses: [],
  currentCourse: null,
};
export const CourseReducer = createReducer<CourseState>(
  intitialState,
  on(CourseActions.toggleDates, (state) => {
    return { ...state, showDate: !state.showDate };
  }),
  on(
    CourseActions.setCurrentCourse,
    (state, action): CourseState => {
      return { ...state, currentCourse: action.course };
    }
  ),
  on(
    CourseActions.loadingCoursesSuccess,
    (state, action): CourseState => {
      return { ...state, courses: action.courses };
    }
  ),
  on(
    CourseActions.UpdateCurrentCourseSuccess,
    (state, action): CourseState => {
      const updatedProducts = state.courses.map((item) =>
        action.course.id === item.id ? action.course : item
      );
      return {
        ...state,
        courses: updatedProducts,
        currentCourse: action.course,
      };
    }
  )
);
