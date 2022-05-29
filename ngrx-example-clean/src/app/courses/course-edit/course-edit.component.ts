import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { CoursesService } from '../courses.service';
import { Course } from '../models';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss'],
})
export class CourseEditComponent implements OnInit {
  course: Course;
  form: FormGroup;

  constructor(private readonly coursesService: CoursesService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      start: new FormControl(),
      end: new FormControl(),
    });

    this.coursesService.selectedCourseChanges$
      .pipe(filter((x) => !!x))
      .subscribe((selectedCourse) => {
        this.form.patchValue(selectedCourse);
        this.course = selectedCourse;
      });
  }

  save(): void {
    this.coursesService.updateCourse(this.form.value).subscribe();
  }
}
