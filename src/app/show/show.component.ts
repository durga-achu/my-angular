import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../services/dataservice.service'
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor( private pass:DataserviceService) {}

  ngOnInit(): void {

    this.show()
  }
  x:any
  data:any
show(){
  this.pass.getData().subscribe(res=>{
    this.data=res

    console.log(this.data)
  })
  
}
// delete(i:any){
  
//       this.data.splice(i,1);
         
// }
deleted(i:any){
  this.pass.delete(i).subscribe(res=>{
  this.data=res

  console.log(this.data)
})}
}
