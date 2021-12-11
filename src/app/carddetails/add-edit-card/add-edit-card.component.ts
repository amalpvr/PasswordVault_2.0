import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.css']
})
export class AddEditCardComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() car:any;
  Id: string | undefined;
  CardType!:string;
  CardNumber!:string;
  CardHolderName!:string;
  Cvv!:string;



  ngOnInit(): void {
    this.Id=this.car.Id;
    this.CardType=this.car.CardType;
    this.CardNumber=this.car.CardNumber;
    this.CardHolderName=this.car.CardHolderName;
    this.Cvv=this.car.Cvv;
  }

  addCard(){
    var val = {Id:this.Id,
      CardType:this.CardType,
      CardNumber:this.CardNumber,
      CardHolderName:this.CardHolderName,
      Cvv:this.Cvv};
      this.service.addCard(val).subscribe(res=>{
      alert(res.toString());
      });
  }

  updateCard(){
    var val = {Id:this.Id,
      CardType:this.CardType,
      CardNumber:this.CardNumber,
      CardHolderName:this.CardHolderName,
      Cvv:this.Cvv};
      this.service.updateCard(val).subscribe(res=>{
      alert(res.toString());
      });
  }




}
