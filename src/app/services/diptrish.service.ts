import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class DiptrishService {

  

  constructor(private http: HttpClient ) { }
  baseUrl = 'https://05sqzfcnma.execute-api.ap-south-1.amazonaws.com';


  sendMail(body:any){
    return this.http.post(this.baseUrl+'/production',body);
  }
}



// -- Body
// {
//     "name": "Mohit",
//     "email": "mohitbadiyani123@gmail.com",
//     "text": "Test"
// }
// -- Response 
// Mail Sent.