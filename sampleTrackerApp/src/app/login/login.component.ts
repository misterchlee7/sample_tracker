import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  errors;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {

  }
  
  goAdminDash() {
    this._router.navigate(['/admin/dash']);
  }
  goUserDash() {
    this._router.navigate(['/user/dash']);
  }
}
