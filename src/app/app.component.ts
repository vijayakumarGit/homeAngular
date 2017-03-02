import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`div{width:300px;h                                                                                                                                                                                                    eight:200px}`]


})
export class AppComponent {
  title = 'app works!';
  delete:Boolean=false;
  test:string='Starting value';
  boundValue:number=300;
  touchInput(value:string){
    console.log(value)
  }
}
