import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { IconComponent } from './component/icon/icon.component';
import { ImageCheckboxComponent } from './component/image-checkbox/image-checkbox.component';
import { InputCheckboxComponent } from './component/input-checkbox/input-checkbox.component';
import { InputDatePickerComponent } from './component/input-date-picker/input-date-picker.component';
import { InputSelectOptionComponent } from './component/input-select-option/input-select-option.component';
import { InputTextComponent } from './component/input-text/input-text.component';
import { LoadingComponent } from './component/loading/loading.component';
import { LoadingService } from './services/loading.service';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';

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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [LoadingService],
})
export class SharedModule {}
