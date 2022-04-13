
import { UsersModule } from './../../../../libs/users/src/lib/users.module';
import { ProductsModule } from './../../../../libs/products/src/lib/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@client/ui';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './shared/header/header.component';


const routes:Routes=[
  {path:'',component:HomePageComponent ,pathMatch:"full"}
]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomePageComponent,HeaderComponent, FooterComponent],
  imports: [BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes),UiModule,UsersModule,ProductsModule,HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
