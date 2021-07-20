import { Component, OnInit } from '@angular/core';
import { register } from './registration.models';
import {DataserviceService} from '../services/dataservice.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:DataserviceService) { }
  

  ngOnInit(): void {
  }
res=new register()
msg:any

insertFn(){
  // console.log(this.res)
  this.service.insertdata(this.res).subscribe(result=>{
    // console.log(msgresult)
    this.msg=result
  })
}

}
