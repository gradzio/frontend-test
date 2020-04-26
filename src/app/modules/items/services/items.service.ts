import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../services/api-base-url.token';
import { Observable } from 'rxjs';
import { Item, ItemBase } from '../models/item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private httpClient: HttpClient, @Inject(API_BASE_URL) private apiBaseUrl: string) {}

  getAll(titleFilterValue?: string): Observable<Item[]> {
    return this.httpClient
      .get<ItemBase[]>(`${this.apiBaseUrl}/items`, {
        params: titleFilterValue ? { title: titleFilterValue } : null,
      })
      .pipe(map(items => this.mapToTree(items)));
  }

  getSingle(id: string): Observable<ItemBase> {
    return this.httpClient.get<ItemBase>(`${this.apiBaseUrl}/items/${id}`);
  }

  private mapToTree(items: ItemBase[]): Item[] {
    const mappedItems: Item[] = [];
    items.forEach(item => {
      if (!item.parent_id || !items.find(element => element.id === item.parent_id)) {
        return mappedItems.push({ ...item, children: this.getChildItems(items, item.id) });
      }
    });

    return mappedItems;
  }

  private getChildItems(items: ItemBase[], parentId: number): Item[] {
    return items
      .filter(item => item.parent_id === parentId)
      .map(item => ({ ...item, children: this.getChildItems(items, item.id) }));
  }
}
