import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
contactValue!: string;
lnameValue!: string;
fnameValue!: string;
emailValue!: string;

@Output() updateStudentInfo:EventEmitter<Istd>=new EventEmitter<Istd>()

  constructor() { }

  ngOnInit(): void {
  }
  onstudentadd(eve:Event){
    let obj:Istd={
         fname:this.fnameValue,
         lname:this.lnameValue,
         email:this.emailValue,
         contact:+this.contactValue
    }
console.log(obj)
this.updateStudentInfo.emit(obj)
this.fnameValue='';
this.lnameValue='';
this.emailValue='';
this.contactValue='';
  }

}
