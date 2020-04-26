import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[app-button], a[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() @HostBinding('[attr.disabled]') disabled: boolean;
  @Input() @HostBinding('class') buttonType: 'flat' | 'clear' = 'clear';
  @Input() @HostBinding('class.wide') wide: boolean;
}
