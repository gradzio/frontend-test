import { Component } from '@angular/core';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  constructor(private sideBarService: SideBarService) {}

  toggleSideBar() {
    this.sideBarService.toggleSidebar();
  }
}
