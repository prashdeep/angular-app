import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template:`
       <div [style.background-color]="isActive?'red':'blue'">
        <h2>Courses</h2>
        <button class='btn btn-primary'>Save</button>
       </div>  
    `
})

export class CoursesComponent{
    isActive=true;
}