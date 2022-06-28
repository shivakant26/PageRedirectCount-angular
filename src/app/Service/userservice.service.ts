import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/users';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
 private apiURL = "https://react-rails-api-demo.herokuapp.com/api/v1";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient ) { }
  
  register(user:user):Observable<user>{
    return this.http.post<user>(this.apiURL + '/signup',{user},this.httpOptions)
  }
}
