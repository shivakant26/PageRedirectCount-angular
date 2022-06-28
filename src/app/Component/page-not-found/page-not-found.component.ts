import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
 count : number = 3;
  constructor(private router:Router) { }

  ngOnInit(): void {
   
    setTimeout(()=>{
      var loop = setInterval(()=>{
        this.count--;
        if(this.count == 0){
          clearInterval(loop);
          this.router.navigate(["/"]);
        }
        console.log(this.count)
      },1000)
      
    },1000)
    
  }

}
