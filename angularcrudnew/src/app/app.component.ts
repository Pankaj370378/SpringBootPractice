import { Component } from '@angular/core';
declare const test:any;
//declare function test(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abcdefghijkkskalskkla Crud Api';

  onclick(){
    debugger
    test();
  }
}
