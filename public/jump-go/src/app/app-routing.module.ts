import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertComponent } from './pages/convert/convert.component';
import { GoComponent } from './pages/go/go.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/convert',
    pathMatch: 'full'
  },
  {
    path: 'convert',
    component: ConvertComponent
  },
  {
    path: 'go/:uid',
    component: GoComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
