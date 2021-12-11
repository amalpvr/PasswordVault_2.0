import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-log',
  templateUrl: './show-log.component.html',
  styleUrls: ['./show-log.component.css']
})
export class ShowLogComponent implements OnInit {

  constructor(private service :SharedService) { }

  LoginList:any=[];
  log:any;
  ActivateAddEditComp:boolean=false;


  ngOnInit(): void {
    this.refreshLoginList();
}

addClick(){
  this.log={
    Id:0,
    Username:"",
  Password:"",
WebsiteName:"",
WebsiteUrl:""
  }
  this.ActivateAddEditComp=true;
      }



  refreshLoginList(){
    this.service.getLoginList().subscribe(data=>{
      this.LoginList=data;
    });
  }
  editClick(item: any){
    this.log=item;
    this.ActivateAddEditComp=true;
    
 }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteLogin(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshLoginList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshLoginList();
  }

  }
