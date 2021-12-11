
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-log',
  templateUrl: './add-edit-log.component.html',
  styleUrls: ['./add-edit-log.component.css']
})
export class AddEditLogComponent implements OnInit {

  constructor(private service:SharedService) { }
@Input() log:any;
  Id: string | undefined;
  WebsiteName!:string;
  WebsiteUrl!:string;
  Username!:string;
  Password!:string;

  ngOnInit(): void {
    this.Id=this.log.Id;
    this.Password=this.log.Password;
    this.WebsiteName=this.log.WebsiteName;
    this.WebsiteUrl=this.log.WebsiteUrl;
    this.Username=this.log.Username;
  }


  addLogin(){
    var val = {Id:this.Id,
    Username:this.Username,
  Password:this.Password,
WebsiteName:this.WebsiteName,
WebsiteUrl:this.WebsiteUrl};
this.service.addLogin(val).subscribe(res=>{
  alert(res.toString());
});
  }
  updateLogin(){
    var val = {Id:this.Id,
      Username:this.Username,
    Password:this.Password,
  WebsiteName:this.WebsiteName,
  WebsiteUrl:this.WebsiteUrl};
  this.service.updateLogin(val).subscribe(res=>{
    alert(res.toString());
  });
  }


}
