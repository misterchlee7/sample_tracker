import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) {}

  ngOnInit() {
    // EXAMPLE OF BLOCKING OFF PAGES WITH AUTH0
    // if(!this._httpService.isAuthenticated()){
    //   this._router.navigate(['confirmation']);
    // } else{
    //   this._router.navigate(['admin/history'])
    // }
  }

}
