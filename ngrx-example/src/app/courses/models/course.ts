import { Data } from '@angular/router';

export interface Course {
  id: number;
  name: string;
  description: string;
  start: Date;
  end: Data;
}
