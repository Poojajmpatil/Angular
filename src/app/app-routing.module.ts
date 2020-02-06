import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'ob',component:ObservableDemoComponent},
  {path:'**',component:PageNotFoundComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
