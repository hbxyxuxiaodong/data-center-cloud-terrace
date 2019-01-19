import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService extends CommonService {

  public getMainMenu(): Observable <any> {
    return this.hc.get(this.apiURL.menu);
  }
}
