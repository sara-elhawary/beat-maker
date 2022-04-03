import { ProductsModule } from './../../../../libs/products/src/lib/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@client/ui';
import {ProgressBarModule} from 'primeng/progressbar';


const routes:Routes=[
  {path:'',component:HomePageComponent ,pathMatch:"full"},{path:"products",component:ProductListComponent},
]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomePageComponent, ProductListComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes),UiModule,ProgressBarModule,ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
