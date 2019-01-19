import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../service/main-menu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private mainMenuService: MainMenuService, private router: Router) { }
  menus;
  public isCollapse: boolean = false;
  ngOnInit() {
    this.mainMenuService.getMainMenu().subscribe( menus => {
      menus.forEach( item => {
         item.isOpen = false;
         let children = item.children;
         children.forEach( subitem => subitem.active = false)
      }
      )
       this.menus = menus;
      }
    );
  }
  logOut() {
    this.router.navigateByUrl('/login');
  }
  public toggleMenuItem(event, menu): void {
    menu.isOpen = !menu.isOpen;
    // 折叠状态下只能打开一个二级菜单层
    if (this.isCollapse) {
        let tempId = menu.id;
        this.menus.forEach(item => {
            if (item.id !== tempId) {
                item.isOpen = false;
            }
        });
    }
    let tempId = menu.id;
    this.menus.forEach(item => {
        if (item.id !== tempId) {
            item.isOpen = false;
        }
    });
    // if (this.menuActive){
    //     this.flag = true;
    // }
}
}
