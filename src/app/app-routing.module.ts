import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { Route1Component } from './components/route1/route1.component';
import { Route2Component } from './components/route2/route2.component';

const routes: Routes = [
  { path: 'route1', component: Route1Component },
  { path: 'route2', component: Route2Component },
  {
    path: 'blog', component: BlogComponent, children: [
      { path: ':id', component: BlogComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
