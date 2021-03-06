import { SubCategorysComponent } from './pages/sub-categorys/sub-categorys.component';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';
import { AdminGuard } from './shared/admin.guard';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorysComponent } from './pages/categorys/categorys.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent, canActivate: [AdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'categorys', component: CategorysComponent, canActivate: [AdminGuard]},
  {path: 'categorys/:id', component: CategoryComponent, canActivate: [AdminGuard]},
  {path: 'subcategorys', component: SubCategorysComponent, canActivate: [AdminGuard]},
  {path: 'subcategorys/:id', component: SubCategoryComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
