import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Numbers program';

  number !: number;
  result = "";

  constructor(){
    this.number = 0;
  }

  evenodd(){
    this.result = "";
    this.elements = []
    if(this.number%2 == 0){
      this.result = this.number + " is Even number"
    }else{
      this.result = this.number + " is Odd number"
    }
  }


  elements  :Number[] = [];
  evenArray(){
    this.result = ""
    this.elements = [];
    for(let i=2; i<= this.number; i++){
      if(i%2 == 0){
        this.elements.push(i);
      }
    }
  }

  oddArray(){
    this.elements = [];
    this.result = ""
    for(let i=1 ; i<=this.number;i++){
      if(i%2==1){
        this.elements.push(i);
      }
    }
  }

  isPalindrome(){
    this.result = " ";
    this.elements = []
    let reverse=0;
    let temp : number = this.number
    let remainder ;
    while(temp>0){
                  remainder = temp % 10;
                  reverse = reverse* 10 + remainder;
                  temp = Math.floor(temp/10);
    }
    // console.log(reverse);
    console.log('hello');


    if(reverse == this.number){
      this.result = this.number + " is palidrome number"
    }else{
      this.result = this.number + " is not palindrome number"
    }
  }

  isArmStrong(){
    this.result = " ";
    this.elements = []
    let sum = 0;
    let n = this.number.toString().split('');
    let num = n.length;
    let temp = this.number;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = Math.floor(temp / 10);
        }

    if(sum == this.number){
      this.result = this.number + " is Armstrong";
    }else{
      this.result = this.number + " is not Armstrong";
    }


  }
  clear(){
    this.result = ""
    this.elements = [];
    this.number = 0;
  }
}
