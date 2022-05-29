import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './models';

export class CourseData implements InMemoryDbService {
  createDb(): any {
    const courses: Course[] = [
      {
        id: 1,
        name: 'NGRX',
        description: 'something about ngrx',
        start: new Date(2021, 1, 26, 18, 30),
        end: new Date(2021, 1, 26, 20, 30),
      },
      {
        id: 2,
        name: 'NX Monorepos',
        description: 'something about Monorepos',
        start: new Date(2021, 2, 26, 18, 30),
        end: new Date(2021, 2, 26, 20),
      },
      {
        id: 3,
        name: '.NET 5',
        description: 'something about .net 5',
        start: new Date(2021, 5, 18, 9),
        end: new Date(2021, 6, 16, 17),
      },
      {
        id: 4,
        name: 'Azure service bus',
        description: 'something about azure',
        start: new Date(2021, 6, 18, 9),
        end: new Date(2021, 7, 16, 17),
      },
      {
        id: 5,
        name: 'Python',
        description: 'something about Python',
        start: new Date(2021, 7, 18, 9),
        end: new Date(2021, 8, 16, 17),
      },
    ];
    return { courses };
  }
}
