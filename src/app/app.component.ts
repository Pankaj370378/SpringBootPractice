import { Component, OnInit } from '@angular/core';
//declare const test:any;
declare function test(): void;
import { NgxUiLoaderService } from "ngx-ui-loader";
import { SPINNER } from 'ngx-ui-loader/lib/utils/enums';
declare var $: any;  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ngxService: NgxUiLoaderService) {}
  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);
    
  }

}
