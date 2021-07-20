import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor( private httpclient:HttpClient) { 

 
  }

insertdata(data:any){
// console.log(data)
return this.httpclient.post('https://cybersquare.herokuapp.com/user/',data)

}
getData(){
  return this.httpclient.get('https://cybersquare.herokuapp.com/user/')
}

delete(id:any){
  return this.httpclient.delete('https://cybersquare.herokuapp.com/user/'+id)
}
}
