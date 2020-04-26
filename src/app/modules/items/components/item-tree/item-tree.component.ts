import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-tree',
  templateUrl: './item-tree.component.html',
  styleUrls: ['./item-tree.component.scss'],
})
export class ItemTreeComponent {
  @Input() items: Item[];
}
