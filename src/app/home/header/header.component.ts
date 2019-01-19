import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../service/event-bus.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private toggleBtnStatus:boolean = false;
  constructor(public eventBusService: EventBusService) { }

  ngOnInit() {
  }
  public onTogglerClick(event):void{
    this.toggleBtnStatus = !this.toggleBtnStatus;
    // this.menuActiveStatus = !this.menuActiveStatus
    // this.eventBusService.menuActice.subscribe(value=>{
    //   this.menuActiveStatus = value
    // })
    this.eventBusService.topToggleBtn.next(this.toggleBtnStatus);
    // this.eventBusService.menuActice.next(this.menuActiveStatus);
  }
}
