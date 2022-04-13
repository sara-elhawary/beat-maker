import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  registerForm: FormGroup = new FormGroup(
    {
      fName: new FormControl('', [Validators.required,Validators.pattern(/[a-zA-Z]/),Validators.maxLength(15)]),
      lName: new FormControl('', [Validators.required,Validators.pattern(/[a-zA-Z]/),Validators.maxLength(15)]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cPassword: new FormControl('', [Validators.required])

    }
  );
  constructor( private route: Router) { }

  ngOnInit(): void {
  }


  signUp()
  {
    var passwordSpan = (<HTMLSpanElement>document.getElementById("passwordSpan"));
    var cPasswordSpan = (<HTMLSpanElement>document.getElementById("cPasswordSpan"));

// if(!this.registerForm.valid)
// {
//   return
// }

    console.log(this.registerForm.value);
    localStorage.setItem('fName', this.registerForm.value.fName);
    localStorage.setItem('lName', this.registerForm.value.lName);
    localStorage.setItem('address', this.registerForm.value.address);
    localStorage.setItem('email', this.registerForm.value.email);
    localStorage.setItem('password', this.registerForm.value.password);

    this.route.navigate(['/login']);

  }

}
