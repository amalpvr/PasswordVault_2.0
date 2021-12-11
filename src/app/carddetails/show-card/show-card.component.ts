import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  constructor(private service :SharedService) { }

  CardList:any=[];
  car:any;
  ActivateAddEditComp:boolean=false;

  ngOnInit(): void {
this.refreshCardList();
  }

  refreshCardList(){
    this.service.getCardList().subscribe(data=>{
      this.CardList=data;
    })
  }

  addClick(){
    this.car={
      Id:0,
      CardType:"",
      CardNumber:"",
      CardHolderName:"",
      Cvv:""
    }
    this.ActivateAddEditComp=true;
  }

    editClick(item: any){
          this.car=item;
          this.ActivateAddEditComp=true;

    }

    deleteClick(item:any){
      if(confirm('Are you sure??')){
        this.service.deleteCard(item.Id).subscribe(data=>{
          alert(data.toString());
          this.refreshCardList();
        })
      }
    }

    closeClick(){
      this.ActivateAddEditComp=false;
      this.refreshCardList();
    }



}
