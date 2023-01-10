import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArrayComponent } from './pages/array/array.component';
import { NumberComponent } from './pages/number/number.component';

const routes: Routes = [
  {
    component : ArrayComponent,
    path : "array"
  },
  {
    component:NumberComponent,
    path: "Numbers"
  },
  {
    component:AppComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
