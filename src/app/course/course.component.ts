import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'course',
  template: `
  <div [style.background-color]="'red'">
     <h2>Courses</h2>
     <h2 [textContent]="courses.length"></h2>
     <img src="{{imageUrl}}"/>
     <img [src]="imageUrl"/>
     <ul>
       <li *ngFor="let course of courses">{{ course }}</li>
     </ul>
     <button (click)="onClick($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]='red'>Save</button>
     </div>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  imageUrl="https://www.w3schools.com/angular/pic_angular.jpg";
  isActive=true;
  constructor(private courseService: CoursesService){
    
  }
  courses = this.courseService.getCourses();
  onClick($event){
    console.log("button was clicked ",$event);
  }
}
