import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

import { tokenNotExpired } from 'angular2-jwt';
import { Auth0Lock } from 'auth0-lock';

@Injectable()
export class HttpService {
  auth0Options = {
    theme: {
      logo: 'http://www.free-icons-download.net/images/tracking-icon-17874.png',
      primaryColor: '#ff4f38'
    },
    auth: {
      redirectUrl: environment.auth0.callbackURL,
      responseType: 'token id_token',
      audience: `https://${environment.auth0.domain}/userinfo`,
      params: {
        scope: 'openid profile'
      }
    },
    autoclose: true,
    oidcConformant: true,
  };

  lock = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    this.auth0Options
  );

  constructor(
    private _http: HttpClient,
    private router: Router
  ) {
    this.lock.on('authenticated', (authResult: any) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if(error) {
          throw new Error(error);
        }
        localStorage.setItem('token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.router.navigate(['admin/dash'])
      });
    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
  }

  login(){
    this.lock.show();
  }

  logout(){
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
  }

  isAuthenticated(){
    return tokenNotExpired();
  }

  // products
  createProduct(newObj) {
    return this._http.post('/api/products', newObj);
  }
  getProducts() {
    return this._http.get('/api/products');
  }
  getOneProduct(id) {
    return this._http.get(`/api/products/${id}`);
  }
  deleteProduct(id) {
    return this._http.delete(`/api/products/${id}`);
  }
  updateProduct(id, newObj) {
    return this._http.put(`/api/products/${id}`, newObj)
  }
  //  users
  createUser(newObj) {
    return this._http.post('/api/users', newObj);
  }
  getUsers() {
    return this._http.get('/api/users');
  }
  getOneUser(email) {
    return this._http.get(`/api/users/${email}`);
  }
  deleteUser(id) {
    return this._http.delete(`/api/users/${id}`);
  }
  updateUser(id, newObj) {
    return this._http.put(`/api/users/${id}`, newObj)
  }
  addProducts(id, products) {
    return this._http.post(`/api/users/${id}`, {items: products});
  }
}

export class SavedItems {
  items;
}

