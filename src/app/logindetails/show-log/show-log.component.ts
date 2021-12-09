import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-log',
  templateUrl: './show-log.component.html',
  styleUrls: ['./show-log.component.css']
})
export class ShowLogComponent implements OnInit {

  constructor(private service :SharedService) { }

  LoginList:any=[];


  ngOnInit(): void {
    this.refreshLoginList();
  }

  refreshLoginList(){
    this.service.getLoginList().subscribe(data=>{
      this.LoginList=data;
    })
  }


}
