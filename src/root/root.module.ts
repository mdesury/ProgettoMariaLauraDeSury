import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RicercaComponent } from './ricerca/ricerca.component';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [
    RootComponent,
    RicercaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
