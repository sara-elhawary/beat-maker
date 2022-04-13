import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required])

    }
  );
  
  constructor(private route:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  logIn()
  {
     this.authService.login(this.loginForm.value).subscribe
      ({next:(response) =>{
        console.log(response);
        this.route.navigate(['/']);
        localStorage.setItem('email', JSON.stringify((response as any).response.user));
        localStorage.setItem('token', (response as any).response.token);
      // this.route.navigate(['/home']);
    },
      error: (err) => {console.log(err)}
    })
    // var btnSpan = (<HTMLSpanElement>document.getElementById("btnSpan"));

    // if(!this.loginForm.valid){return}
    // else if(this.loginForm.value.email !== localStorage.getItem('email') ||
    // this.loginForm.value.password !== localStorage.getItem('password') )
    // {
    //  btnSpan.textContent="email or password not right";
    // }
    
    // else{
    
    // }
    // this.authService.isLoggedIn();
    

  }

}
