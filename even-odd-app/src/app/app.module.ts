import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArrayComponent } from './pages/array/array.component';
import { NumberComponent } from './pages/number/number.component';
import { AdditionComponent } from './addition/addition.component';
// import { CheckArrayComponent } from './pages/check-array/check-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    NumberComponent,
    AdditionComponent,
    // CheckArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
