import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from 'src/app/Service/userservice.service';
import { user } from 'src/users';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model : any = {} 
  constructor(private userService : UserserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  registeruser(){
    this.userService.register(this.model).subscribe((res)=>{
      console.log("resposne",res)
      if(res){
        alert("User signup successfully");
        this.router.navigate(["/"]);
      }
    })
    console.log(this.model)
  }
}
