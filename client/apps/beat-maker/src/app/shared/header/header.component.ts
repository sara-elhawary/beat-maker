import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/Services/auth.service';
// import { HomeServiceService } from 'src/app/Services/home-service.service';
// import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'beatmaker-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor( private authService:AuthService, private httpclient: HttpClient , private ProfileService:ProfileService, private HomeService:HomeServiceService ) { }
  constructor(){}

  ngOnInit(): void {
    
  }

  // checkLogin()
  // {
  //   if(this.authService.isLoggedIn())
  //   {
      
  //   }
  // }
  GoToProfile()
  {
    // this.ProfileService.GoToProfile();
  }
  GoToHome()
  {
    // this.HomeService.GoToHome();
  }
  GoToSignUp()
  {
    // this.HomeService.GoToSignUp();

  }

}
