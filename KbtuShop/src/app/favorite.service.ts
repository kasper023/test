import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './interfaces/product';
import { Observable, of } from 'rxjs';
import { Favorite } from './interfaces/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  items: any = [];

  constructor(private httpClient: HttpClient) { }

  getFavorite(): Observable<Favorite[]> {
    return this.httpClient.get<Favorite[]>('http://localhost:8000/api/favorite/');
  }

  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8000/api/products/');
  }

  addToFavorite(thisProduct: Product): Observable<Favorite> {
    const item = {
      product: thisProduct.id,
      user: 1
    };
    return this.httpClient.post<Favorite>('http://localhost:8000/api/favorite/', item);
  }

  deleteFromFavorite(id: number): Observable<void> {
    console.log(id, 'was deleted');
    return this.httpClient.delete<void>(`http://localhost:8000/api/favorite/${id}`);
  }
}
