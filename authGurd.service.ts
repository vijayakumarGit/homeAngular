

import {
  ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot,
} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGurd implements CanActivate,CanDeactivate<any>{

  constructor(private router:Router){}
  canActivate(route:ActivatedRouteSnapshot){
     if(!localStorage.getItem('user_token'))
    {
      let urldata:RouterStateSnapshot=route['_routerState']
      if(urldata.url.indexOf('dashboard') > -1){
        if(route.queryParams && Object.keys(route.queryParams).length > 0){
          return true
        }
        else{
          window.open('http://freightsystems.com/','_self')
          return false;
        }
      }
      this.router.navigate(['/'])
      return false;
    }
    return true

  }
  canDeactivate(){
    const urlTree = this.router.parseUrl(this.router.url);
    const urlWithoutParams = urlTree.root.children['primary'].segments.map(it => it.path).join('/');
    localStorage.setItem('prevroute',urlWithoutParams)
    return true;
  }



}
