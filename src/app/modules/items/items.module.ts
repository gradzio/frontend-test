import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemTreeElementComponent } from './components/item-tree-element/item-tree-element.component';
import { ItemTreeComponent } from './components/item-tree/item-tree.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [
    ItemsListComponent,
    ItemTreeElementComponent,
    ItemTreeComponent,
    ItemDetailsComponent,
  ],
  imports: [CommonModule, ItemsRoutingModule, SharedModule, HttpClientModule],
})
export class ItemsModule {}
