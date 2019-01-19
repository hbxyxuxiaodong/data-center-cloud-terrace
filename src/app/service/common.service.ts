import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  protected apiURL: any = {};

  constructor(protected hc: HttpClient) {
    this.apiURL = environment.apiURL;
  }
}
