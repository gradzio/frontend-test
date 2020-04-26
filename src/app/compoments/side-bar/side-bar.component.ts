import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          marginLeft: 0,
        }),
      ),
      state(
        'closed',
        style({
          marginLeft: '-101%', // 101 to hide the drop shadow of the sidebar
        }),
      ),
      transition('open => closed', [animate('0.3s ease-in-out')]),
      transition('closed => open', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class SideBarComponent {
  public isSideBarOpen$: BehaviorSubject<boolean>;
  public isBelowSm$: BehaviorSubject<boolean>;

  constructor(private sideBarService: SideBarService) {
    this.isSideBarOpen$ = this.sideBarService.isSidebarOpen$;
    this.isBelowSm$ = this.sideBarService.isBelowSm$;
  }
}
