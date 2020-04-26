import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Observable, throwError } from 'rxjs';
import { Item } from '../../models/item.model';
import { catchError, delay, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  public items$: Observable<Item[]>;
  public itemsFetchError: boolean;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(titleFilterValue?: string) {
    this.items$ = this.itemsService.getAll(titleFilterValue).pipe(
      // delay(3000), // uncomment this line to see how the loading state was handled
      // mergeMap(() => throwError('error')), // uncomment this line to see how errors are being handled
      tap(() => (this.itemsFetchError = false)),
      catchError(err => {
        this.itemsFetchError = true;
        return throwError(err);
      }),
    );
  }
}
