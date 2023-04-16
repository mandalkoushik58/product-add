import { Component, Input, OnInit } from '@angular/core';
import { Istd } from 'src/app/model/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
@Input() studentInfo:Array<Istd>=[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.studentInfo)
  }

}
