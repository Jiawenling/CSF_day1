import { Component } from '@angular/core';
import {StringConcatBuiltinFn} from "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to CSF Day 1';
  myNumber:number;

  constructor() {
    this.myNumber = 12345;
  };

  getName(name:String){
    alert("Hello"+name)
  }

  show(){
    // @ts-ignore
    document.querySelector("img").style.display="block"
    // @ts-ignore
    document.querySelector("button").style.display="none"

  }
}
