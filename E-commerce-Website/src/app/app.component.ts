import { Component } from '@angular/core';
import { SellerService } from './service/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private seller : SellerService){}
  title = 'E-commerce-Website';

  ngOnInit():void{
    this.seller.reloadSeller() ; 
  }
}
