import { Component } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';
import { TweenMax }  from 'gsap';
import { TweenLite }  from 'gsap';
import { Employee } from 'src/app/services/employee-service/employeeHelper';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { User } from 'src/app/services/employee-service/employeeHelper';
import { of } from 'rxjs';
import Swal from 'sweetalert2'
// import 'animate.css';


@Component({
  selector: 'app-navbaar-component',
  templateUrl: './navbaar-component.component.html',
  styleUrls: ['./navbaar-component.component.css']
})
export class NavbaarComponentComponent {
  user: User = new User();
  constructor(private userservice: UserServiceService,){}


addUser() {
  debugger;
  this.userservice.createUser(this.user).subscribe(data => {
    console.log(data)
    Swal.fire({
      title: 'Login Succesfully Thank You',
      width: '600px',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
   
  }, 
  error => console.log(error));{
    Swal.fire({
      title: 'User Already Here Please try again',
      width: '600px',
     
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}

formSubmit(){
  debugger;
  this.addUser();
  console.log(this.user);
}
ngOnInit(){}
}

