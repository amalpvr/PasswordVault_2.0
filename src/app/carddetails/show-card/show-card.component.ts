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

  ngOnInit(): void {
this.refreshCardList();
  }

  refreshCardList(){
    this.service.getCardList().subscribe(data=>{
      this.CardList=data;
    })
  }

}
