import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';

const layoutRoutes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: '', component: HomeComponent}
      ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(layoutRoutes)],
    exports: [RouterModule],
  })
  export class LayoutRoutingModule {}