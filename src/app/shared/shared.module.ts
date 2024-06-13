import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { IconComponent } from './component/icon/icon.component';
import { ImageCheckboxComponent } from './component/image-checkbox/image-checkbox.component';
import { InputCheckboxComponent } from './component/input-checkbox/input-checkbox.component';
import { InputDatePickerComponent } from './component/input-date-picker/input-date-picker.component';
import { InputFileComponent } from './component/input-file/input-file.component';
import { InputSelectOptionComponent } from './component/input-select-option/input-select-option.component';
import { InputTextComponent } from './component/input-text/input-text.component';
import { LoadingComponent } from './component/loading/loading.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IgxCarouselModule, IgxSliderModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    IconComponent,
    ImageCheckboxComponent,
    InputTextComponent,
    InputSelectOptionComponent,
    InputDatePickerComponent,
    InputCheckboxComponent,
    LoadingComponent,
    ConfirmationDialogComponent,
    InputFileComponent,
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
    ToastNoAnimationModule,
    ConfirmationDialogComponent,
    InputFileComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ToastNoAnimationModule.forRoot(),
    IgxSliderModule,
    IgxCarouselModule
  ],
})
export class SharedModule {}
