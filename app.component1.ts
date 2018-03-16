import {Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Menus} from "./shared/service/menu-items";
import {Subscription} from "rxjs/Subscription";

declare var ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  subscription:Subscription;
  constructor(router: Router, private menuname: Menus) {
    this.subscription=router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        ga('set', 'page', ev.urlAfterRedirects);
        ga('send', 'pageview');
        ga('send', 'screenview',this.pathmatcher(ev.urlAfterRedirects));
      }
    })
    // localStorage.setItem('prevroute',this._router.url)
  }

  pathmatcher(path) {
    let pathArr = path.split('/');
    let menus=this.menuname.getAllMenu()
    let name;
    menus.forEach(menu => {
      if (menu.state == pathArr[1]) {
        name = pathArr[2] ? menu.name + ' ' + pathArr[2] : menu.name;
        if (pathArr[1] && pathArr[1].indexOf('report') > -1) {
          menu.children.forEach(childVal => {
            if (childVal.param == pathArr[3]) {
              name = childVal.name + ' ' + pathArr[2];
            }
          })
        }
      }
    })
    return name;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
