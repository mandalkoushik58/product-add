import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
  FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
