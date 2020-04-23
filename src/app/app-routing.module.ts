import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];
//if the path has /admin then serve the AdminComponent
//Be careful when adding paths. Angular searches in from top to bottom.
//So if top has some generic path which satisfies all conditions
//then it will be rendered and below paths will not be checked 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Proxy forwards requests from Angular running on 4200 port TO spring running on 8080 port
//Proxies are good at overcoming COARS issues where browsers block JS calls to domains that the are not the same as orgin 
//If proxy sees any request that has '/server' then forward to target:http://localhost:8080
//In package.json file make change as "start": "ng serve --proxy-config proxy.conf.json",

//Instead of using Proxy, we can have Angular app inside Resources/static folder. This setup 
//is not recommended as for a small css change in Angular, entire spring also needs to be published.
//It is better to use as seperate standalone apps and use proxy to connect them.   

