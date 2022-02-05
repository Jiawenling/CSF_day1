import {Component, OnInit} from '@angular/core';
import {StringConcatBuiltinFn} from "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin";
import {Form, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Person, BioData} from './person'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from "./dialog.component";

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

  personalForm!:FormGroup;
  newFormArray!: FormArray;
  contactOptions = ['Phone', 'SMS', 'Email']
  bioInfo: FormArray = this.fb.array([])


  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  };

  ngOnInit() {
    this.personalForm = this.createForm()
  }

  createFormArray(): FormArray {
    this.newFormArray = this.fb.array([])
    for(let i = 0; i< this.contactOptions.length; i++){
        this.newFormArray.push(this.fb.control(''))
    }
    return this.newFormArray
  }

  createForm(){
    return this.fb.group({
      name: this.fb.control('Perry', [Validators.required, Validators.minLength(3)]),
      phone: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('', [Validators.email, Validators.required]),
      gender: this.fb.control('', Validators.required),
      contactOption: this.createFormArray(),
      bioInfo: this.bioInfo
    })
  }

  addBio(){
    let bioGroup = this.fb.group({
      traits: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required)
    })
    this.bioInfo.push(bioGroup)
  }

  deleteBioOption(index: number){
    if(this.bioInfo.length==1){
      this.openDialog(index)
    } else{
      this.deleteBio(index)
    }
  }

  deleteBio(index:number){
    this.bioInfo.removeAt(index)
  }

  bioIsEmpty(){
    return this.bioInfo.length==0
  }

  processForm(){
    console.log(this.personalForm.value)
    const person = this.personalForm.value as Person
    person.contactOption =person.contactOption.map(v => !!v)
    console.log(person)
    this.personalForm.reset()
  }

  openDialog(i:number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.data==='true'){
        this.deleteBio(i)
      }
    });
  }
}

