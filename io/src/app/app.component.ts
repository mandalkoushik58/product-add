import { Component } from '@angular/core';
import { Istd } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'io';
  stdArray:Array<Istd>=[{
    fname:"john",
    lname:"doe",
    email:"john@gmail.com",
    contact:12345
  }]
  onStdUpdate(data:Istd){
 console.log(data)
 this.stdArray.push(data)
  }
}
