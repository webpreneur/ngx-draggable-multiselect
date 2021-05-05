import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NgxDraggableMultiselectComponent } from './ngx-draggable-multiselect.component';
import { ListFilterPipe } from './pipes/list-filter.pipe';
import { DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    NgxDraggableMultiselectComponent,
    ListFilterPipe,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
  ],
  exports: [
    NgxDraggableMultiselectComponent
  ]
})
export class NgxDraggableMultiselectModule { }
