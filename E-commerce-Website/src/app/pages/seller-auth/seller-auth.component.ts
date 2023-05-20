import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signup } from 'src/model/sellerForm.model';
import { SellerService } from 'src/app/service/seller.service';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  static checkLogin() {
    throw new Error("Method not implemented.");
  }


  constructor(private seller: SellerService) {

  }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  SignUp(data: signup) : void {
    console.log(data);
    this.seller.userSignUp(data);
    // this.router.navigate(['seller-home']);
  }
}
