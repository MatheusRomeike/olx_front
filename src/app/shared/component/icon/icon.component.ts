import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<ng-content></ng-content>`,
})
export class IconComponent {
  @HostBinding('class.material-icons') materialIconsClass = true;
}
