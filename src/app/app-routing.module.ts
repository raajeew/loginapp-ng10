import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component'

const routes: Routes = [   
  { 
    path: '',
    component :  MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
      },
      { 
        path: 'hotels', 
        loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) 
      },
      { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'home'
      },
    ]
  },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
