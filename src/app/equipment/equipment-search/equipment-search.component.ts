import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-search',
  templateUrl: './equipment-search.component.html',
  styleUrls: ['./equipment-search.component.scss']
})
export class EquipmentSearchComponent implements OnInit {
  queryModel;
  constructor() { }

  ngOnInit() {
    this.queryModel = {
      "ano":"",
      "father":"",
      "card_position":"",
      "asset_no":"",
      "name":"",
      "brand":"",
      "modle":"",
      "function":"",
      "system":"",
      "status":"",
      "on_line_date_start":"",
      "on_line_date_end":"",
      "room":"",
      "cabinet":"",
      "location":"",
      "belong_dapart":"",
      "belong_dapart_manager":" ",
      "manage_dapart":"",
      "manager":"",
      "ip":"",
      "maintain_vender":""
    }
  }

}
