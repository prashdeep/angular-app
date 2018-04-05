import { Component} from '@angular/core';

@Component({
  selector: 'pipe-demo',
  template: `
    <div>
       <ul>
        <li>Course Title: {{course.title | uppercase}}</li>
        <li>Rating: {{course.rating | number:'1.2-2'}}</li>
        <li>Number of students: {{course.students | number}}</li>
        <li>Price: {{course.price | currency:'INR':true}}</li>
        <li>Release Date: {{course.releaseDate | date}}</li>
      </ul>  
    </div>
  `,
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent{

  course={
    title:"Angular",
    rating: 4.976,
    students:26000,
    price:20.345,
    releaseDate:new Date (2016,5,25)
  }
  constructor() { }

  
}
