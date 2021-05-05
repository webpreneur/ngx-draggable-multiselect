import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDraggableMultiselectModule } from '../../../../dist/ngx-draggable-multiselect';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDraggableMultiselectModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
