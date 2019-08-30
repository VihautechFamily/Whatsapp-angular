import { Component } from '@angular/core';

declare var HelloProxy


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  ionViewDidEnter(){
    console.log('Hello world')

    // HelloProxy.sayHello()

  }
}
