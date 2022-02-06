import {Component, OnInit, ViewChild} from '@angular/core';
import {RegisterComponent} from "./register.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // appNumber(child1Num: number){
  //   this.myNumber = child1Num+1
  //   this.numberForChild2 = this.myNumber + 1
  // }
  // show(){
  //   // @ts-ignore
  //   document.querySelector("img").style.display="block"
  //   // @ts-ignore
  //   document.querySelector(".cat").style.display="none"
  // }
  // title = 'Welcome to CSF Day 1';
  // myNumber:number = 0;
  // numberForChild2 = 0;


  constructor() {
  };

  ngOnInit() {

  }

  @ViewChild(RegisterComponent)
  registerComponent!:RegisterComponent

}

