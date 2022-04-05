import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beatmaker-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['assets/images/homePage/h.jpg','assets/images/homePage/z1.jpg',
'assets/images/homePage/z3.jpg'];

  GoToShop()
  {
    
  }
}
