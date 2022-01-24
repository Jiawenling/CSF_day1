import { Component } from '@angular/core';
import {StringConcatBuiltinFn} from "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_project1';
  myNumber:number;

  constructor() {
    this.myNumber = 12345;
  };

  getName(name:String){
    alert("Hello"+name)
  }

}
