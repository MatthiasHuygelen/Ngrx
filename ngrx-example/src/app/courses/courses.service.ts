import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Course } from './models';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  url = 'api/courses';
  private courses: Course[];
  private selectedCourseSource = new BehaviorSubject<Course | null>(null);
  selectedCourseChanges$ = this.selectedCourseSource.asObservable();

  constructor(private http: HttpClient) {}

  changeSelectedProduct(selectedCourse: Course | null): void {
    this.selectedCourseSource.next(selectedCourse);
  }

  getCourses(): Observable<Course[]> {
    if (this.courses) {
      return of(this.courses);
    }
    return this.http
      .get<Course[]>(this.url)
      .pipe(tap((data) => (this.courses = data)));
  }

  updateCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${course.id}`;
    return this.http
      .put<Course>(url, course, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + course.id)),
        tap(() => {
          const newList = this.courses.map((item) =>
            course.id === item.id ? course : item
          );
          this.courses = newList;
        }),
        map(() => course)
      );
  }
}
