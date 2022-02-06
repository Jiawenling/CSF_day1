import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RegisterComponent} from "./register.component";
import {Person} from "./person";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
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

  ngAfterViewInit() {
    this.registerComponent.personalForm.setValue(newPerson)
    // console.log(this.registerComponent.personalForm.value)
  }

  @ViewChild(RegisterComponent)
  registerComponent!:RegisterComponent

}

let newPerson: Person = {
  name: 'Alice',
  phone: '12345678',
  email: 'alice@coolmail.com',
  gender: 'female',
  contactOption: [true, true, false],
  bioInfo:[{
    traits: 'favourite food',
    description: 'pancake'
  }],
  userId: '00001Alice'
}


