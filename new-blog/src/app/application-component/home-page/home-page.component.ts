import { Component, OnInit } from '@angular/core';
declare var $: any;  
// import * as AOS from 'aos';
import * as AOS from 'aos';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html', 
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  ui_ux_scroll() {
     document.getElementById('ui_ux_scroll')?.scrollIntoView({behavior:'smooth'});
   }
   backend_developer_scroll(){
    document.getElementById('backend_developer_scroll')?.scrollIntoView({behavior:'smooth'});
   }
  ngOnInit(): void {
    document.body.className = "selector";
      AOS.init();
    $(document).ready(function() {
    var stickyNavTop = $('.nav-header').offset().top;
     
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
          
    if (scrollTop > stickyNavTop) { 
        $('.nav-header').addClass('sticky');
    } else {
        $('.nav-header').removeClass('sticky'); 
    }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
      stickyNav();
    });
    });
  }

}
