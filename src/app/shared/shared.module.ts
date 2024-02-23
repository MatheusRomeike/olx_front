import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from './component/icon/icon.component';
import { ImageCheckboxComponent } from './component/image-checkbox/image-checkbox.component';

@NgModule({
  declarations: [IconComponent, ImageCheckboxComponent],
  exports: [IconComponent, ImageCheckboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}
