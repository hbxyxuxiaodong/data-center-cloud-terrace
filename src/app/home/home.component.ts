import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isCollapsed:boolean = false;
  constructor(private eventBusService:EventBusService) { }

  ngOnInit() {
    this.eventBusService.topToggleBtn.subscribe(value => {
      this.toggleMenuStatus(value);
    });
  }
  private toggleMenuStatus(isCollapse: boolean): void {
    this.isCollapsed = isCollapse;
  }
}
