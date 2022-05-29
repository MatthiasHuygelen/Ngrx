import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  data: Course[];
  selectedItem: Course;
  showDates = false;

  constructor(private readonly courseService: CoursesService) {}

  ngOnInit(): void {
    this.courseService.selectedCourseChanges$.subscribe(
      (selectedCourse) => (this.selectedItem = selectedCourse)
    );

    this.courseService
      .getCourses()
      .subscribe((courses) => (this.data = courses));
  }

  onSelectionChanged(selectedItem: Course): void {
    this.selectedItem = selectedItem;
    this.courseService.changeSelectedProduct(selectedItem);
  }

  setShowDates() {
    this.showDates = !this.showDates;
  }
}
