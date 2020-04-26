import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 *
 * Ok, so normally I wouldn't make such a service. but I didn't want to overcomplicate this assignment.
 * Normally I'd prefer to use a state management library to control the visibility of the sidebar
 * from other components and I'd make a "ResponsiveService" which would have public properties
 * with BehaviourSubjects which would stream booleans telling me if we are above/below certain breakpoints.
 *
 */

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  private sm = 960;
  public isBelowSm$ = new BehaviorSubject<boolean>(window.innerWidth <= this.sm);
  public isSidebarOpen$ = new BehaviorSubject<boolean>(false);

  constructor() {
    window.addEventListener('resize', (event: UIEvent) => {
      const target = event.target as Window;
      const width: number = target.innerWidth;
      this.isBelowSm$.next(width <= this.sm);
    });
  }

  toggleSidebar() {
    this.isSidebarOpen$.next(!this.isSidebarOpen$.value);
  }
}
