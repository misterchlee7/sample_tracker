import { Component, OnInit } from '@angular/core';
import { HttpService, SavedItems } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  items;
  cartItems;
  cartCount;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router, private _SavedItems: SavedItems) {
    this.items = [];
    this.cartItems = [];
    this.cartCount=0;
  }
  
  ngOnInit() {
    if (!this._SavedItems.items) {
      this._SavedItems.items = 'empty';
    }
    let o = this._httpService.getProducts();
    o.subscribe(res=>{
      this.items = res['products'];
    });
  }
  onAdd(id) {
    let o = this._httpService.getOneProduct(id);
    o.subscribe(res=>{
      this.cartItems.unshift(res['product']);
      for(var i = 0; i < this.items.length; i++) {
        if(this.items[i]._id == res['product']._id) {
            this.items.splice(i, 1);
            break;
        }
      }
      this.cartCount = this.cartItems.length;
    })
  }
  onRemove(id) {
    let o = this._httpService.getOneProduct(id);
    o.subscribe(res=>{
      for(var i = 0; i < this.cartItems.length; i++) {
        if(this.cartItems[i]._id == res['product']._id) {
            this.cartItems.splice(i, 1);
            this.items.push(res['product']);
            break;
        }
      }
      this.cartCount = this.cartItems.length;
    });
  }
  onCheckout() {
    this._SavedItems.items = this.cartItems;
    this._router.navigate(['/confirmation'])
  }
}

