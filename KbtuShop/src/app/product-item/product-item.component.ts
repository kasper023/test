import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { Product } from '../interfaces/product';
import { FavoriteService } from '../favorite.service';
import { Favorite } from '../interfaces/favorite';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private favoriteService: FavoriteService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product).subscribe(() => console.log(product.name, 'added to cart'));
  }

  addToFavorite(product: Product) {
    this.favoriteService.addToFavorite(product).subscribe(() => console.log(product.name, 'added to favorite'));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId') - 1];
    });
  }
}
