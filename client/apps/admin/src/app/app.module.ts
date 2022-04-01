import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route, RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

const routes:Route[]=[{
  path:'',
  component:ShellComponent,
  children:[
    {
      path:"dashboard",
      component:DashboardComponent
    }
  ]
},
]
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShellComponent, DashboardComponent, SidebarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
