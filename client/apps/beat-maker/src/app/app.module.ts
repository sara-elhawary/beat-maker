import { ProductsModule } from './../../../../libs/products/src/lib/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@client/ui';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes=[
  {path:'',component:HomePageComponent}
]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomePageComponent,  HeaderComponent, FooterComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes),UiModule,HttpClientModule,ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
