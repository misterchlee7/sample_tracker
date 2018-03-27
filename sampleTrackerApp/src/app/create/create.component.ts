import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product;
  users;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.product = {styleNo:"", status:"", color: "", season:"", description:"", location:""};
  }

  ngOnInit() {
  }
  onCreate() {
    let o = this._httpService.createProduct(this.product);
    o.subscribe(res=>{
      if (res['error']) {
        // custom error message 
      } else {
        this.goAdminDash();
      }
    })
  }
  goAdminDash() {
    this._router.navigate(['/admin/dash']);
  }
}
