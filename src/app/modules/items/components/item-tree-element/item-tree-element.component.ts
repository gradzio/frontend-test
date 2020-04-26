import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-tree-element',
  templateUrl: './item-tree-element.component.html',
  styleUrls: ['./item-tree-element.component.scss'],
})
export class ItemTreeElementComponent {
  @Input() item: Item;
}
