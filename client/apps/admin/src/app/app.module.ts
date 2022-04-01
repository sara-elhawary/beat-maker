import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';


import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route, RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';

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
      component:CategoriesListComponent
    },
    {
      path:"orders",
      component:OrdersComponent
    }
  ]
},
]
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShellComponent, DashboardComponent, SidebarComponent, ProductsComponent, UsersComponent,  OrdersComponent, CategoriesListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' },),CardModule,ToolbarModule,ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
