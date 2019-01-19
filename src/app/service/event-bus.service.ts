import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  public topToggleBtn: Subject<boolean> = new Subject<boolean>();
  public showGlobalLoading: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
