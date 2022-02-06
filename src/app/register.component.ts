import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Person} from "./person";
import {DialogComponent} from "./dialog.component";
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() retrievedPerson: Partial<Person> = {};

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
      bioInfo: this.createBioArray()
    })
  }

  createBioGroup(){
    return this.fb.group({
      traits: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required)
    })
  }

  addBio(){
    this.bioInfo.push(this.createBioGroup())
  }

  createBioArray(){
    this.addBio()
    return this.bioInfo
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
    person.userId =uuidv4()
    person.contactOption =person.contactOption.map(v => !!v)
    console.log(person)
    localStorage.setItem(person.userId, JSON.stringify(person))
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
