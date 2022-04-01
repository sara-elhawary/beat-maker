import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route, RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes:Route[]=[{
  path:'',
  component:ShellComponent,
  children:[
    {
      path:"dashboard",
      component:DashboardComponent
    },{
      path:"products",
      component:ProductsComponent
    },
    {
      path:"users",
      component:UsersComponent
    },
    {
      path:"categories",
      component:CategoriesComponent
    }
  ]
},
]
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShellComponent, DashboardComponent, SidebarComponent, ProductsComponent, UsersComponent, CategoriesComponent, OrdersComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
