import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
  title = "Performance of array";
  note  = "Enter the comma separated value -"
  elements!: string;
  result = "";

  constructor() {
  }

  minArray() {
    let nums = this.elements.split(',').map(Number); // array of numbers
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (min > nums[i]) {
        min = nums[i];
      }
    }
    this.result = "min element is " + min;
  }

  maxArray(){
    let nums = this.elements.split(",").map(Number);
    let max = nums[0];
    for(let i = 1 ; i<nums.length;i++){
      if(max < nums[i]){
        max = nums[i];
      };
    }
    this.result = "max element is " + max;
  }

  array :Number[]= [];
  // odd: boolean = false;
  reverseArray(){
    let nums = this.elements.split(",").map(Number);
    for(let i=nums.length;i>=0;i--){
      this.array.push(nums[i]);
    }
    this.result = "reverse array is  "+this.array;
  }

  sizeOfArray(){
    let nums = this.elements.split(',').map(Number);
    let size = nums.length;
    this.result = "The length of above array is " + size
  }

  oddArrayElement(){
    let nums = this.elements.split(',').map(Number);
    for(let i=0;i<nums.length;i++){
      if(nums[i]%2 != 0){
        this.array.push(nums[i]);
      }
    }
    this.result = "Odd element is "+ this.array;
    // this.odd = true;
  }
  evenArrayElement(){
    let nums = this.elements.split(',').map(Number);
    for(let i=0;i<nums.length;i++){
      if(nums[i]%2 == 0){
        this.array.push(nums[i]);
      }
    }
    this.result = "Even element is "+ this.array;
  }

  clear(){
    this.elements = "";
    this.result = " ";
  }
}
