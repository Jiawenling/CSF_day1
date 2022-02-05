import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  number1: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  //EventEmitter is a subset of Subject
  @Output() numberEvent = new Subject<number>();

  inc(){
    this.number1+=1;
    this.numberEvent.next(this.number1)}


  dec(){

    this.number1-=1;
    this.numberEvent.next(this.number1)}

}
