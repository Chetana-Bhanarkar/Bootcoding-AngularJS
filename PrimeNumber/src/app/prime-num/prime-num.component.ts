import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { prime } from 'src/app/model/prime.model'
 
@Component({
  selector: 'app-prime-num',
  templateUrl: './prime-num.component.html',
  styleUrls: ['./prime-num.component.css']
})
export class PrimeNumComponent implements OnInit {
  
  ngOnInit(): void {
   
  }
  
  getPrime(prime : prime){
    if(prime.num){
        prime.result = true;
        for(var i=2;i<prime.num;i++){
          if(prime.num % i == 0){
            prime.result = false
            break;
          }
        };
        if(!prime.result){
          console.log("Given number is not prime number");
        }else{
          console.log("Given number is prime number");
        }
          
      }
    }
    
}
