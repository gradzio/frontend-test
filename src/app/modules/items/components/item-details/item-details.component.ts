import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { ItemBase } from '../../models/item.model';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  public item$: Observable<ItemBase>;
  public itemFetchError: HttpErrorResponse;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.item$ = this.route.params.pipe(
      switchMap(params => this.itemsService.getSingle(params.itemId)),
      tap(() => (this.itemFetchError = null)),
      catchError(err => {
        this.itemFetchError = err;
        return throwError(err);
      }),
    );
  }
}
