import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBadgeComponent } from './components/user-badge/user-badge.component';
import { UserOrganizationBadgeComponent } from './components/user-organization-badge/user-organization-badge.component';

@NgModule({
  declarations: [UserBadgeComponent, UserOrganizationBadgeComponent],
  imports: [CommonModule],
  exports: [UserBadgeComponent, UserOrganizationBadgeComponent],
})
export class UserModule {}
