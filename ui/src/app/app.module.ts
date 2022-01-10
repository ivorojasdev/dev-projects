import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer/developer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './developer/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DeveloperComponent, ListComponent, AddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
