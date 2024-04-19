import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from './component/icon/icon.component';
import { ImageCheckboxComponent } from './component/image-checkbox/image-checkbox.component';
import { InputTextComponent } from './component/input-text/input-text.component';
import { InputSelectOptionComponent } from './component/input-select-option/input-select-option.component';
import { InputDatePickerComponent } from './component/input-date-picker/input-date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputCheckboxComponent } from './component/input-checkbox/input-checkbox.component';
import { LoadingComponent } from './component/loading/loading.component';

@NgModule({
  declarations: [
    IconComponent,
    ImageCheckboxComponent,
    InputTextComponent,
    InputSelectOptionComponent,
    InputDatePickerComponent,
    InputCheckboxComponent,
    LoadingComponent,
  ],
  exports: [
    IconComponent,
    ImageCheckboxComponent,
    InputTextComponent,
    InputSelectOptionComponent,
    InputDatePickerComponent,
    InputCheckboxComponent,
    NgbModule,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
})
export class SharedModule {}
