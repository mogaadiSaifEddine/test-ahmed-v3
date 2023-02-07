import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavsComponent } from './components/favs/favs.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favs', component: FavsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
