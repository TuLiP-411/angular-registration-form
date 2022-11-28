import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  constructor() {
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.minLength(3)]),
    password: new FormControl("",[Validators.required,Validators.minLength(3)]),
    country: new FormControl("",[Validators.required,Validators.minLength(3),Validators.email]),
    gender: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required,Validators.minLength(3)]),
  })
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }

  get country(){
    return this.registerForm.get('country')
  }
  get age(){
    return this.registerForm.get('age')
  }
  get phone(){
    return this.registerForm.get('phone')
  }

  get gender(){
    return this.registerForm.get('gender')
  }


  onSubmit() {
    console.log(this.registerForm.value);
  }
}
