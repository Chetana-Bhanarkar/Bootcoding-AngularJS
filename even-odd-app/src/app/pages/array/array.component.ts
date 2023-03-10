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
  array :Number[]= [];

  constructor() {
  }

  minArray(){
    this.result = ""
    this.array= []
    let nums = this.elements.split(',').map(Number); // array of numbers
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (min > nums[i]) {
        min = nums[i];
      }
    }
    this.result = "Minimum element is " + min;
  }

  maxArray(){
    this.result = ""
    this.array= []
    let nums = this.elements.split(",").map(Number);
    let max = nums[0];
    for(let i = 1 ; i<nums.length;i++){
      if(max < nums[i]){
        max = nums[i];
      };
    }
    this.result = "Maximum element is " + max;
  }


  reverseArray(){
    this.array = []
    this.result = ""
    let nums = this.elements.split(",").map(Number);
    for(let i=nums.length-1;i>=0;i--){
      this.array.push(nums[i]);
    }

  }

  sizeOfArray(){
    this.result = ""
    this.array= []
    let nums = this.elements.split(',').map(Number);
    let size = nums.length;
    this.result = "The length of above array is " + size
  }

  oddArrayElement(){
    this.array = []
    this.result = ""
    let nums = this.elements.split(',').map(Number);
    for(let i=0;i<nums.length;i++){
      if(nums[i]%2 != 0){
        this.array.push(nums[i]);
      }
    }
  }
  evenArrayElement(){
    this.array= []
    this.result = ""
    let nums = this.elements.split(',').map(Number);
    for(let i=0;i<nums.length;i++){
      if(nums[i]%2 == 0){
        this.array.push(nums[i]);
      }
    }
  }

  clear(){
    this.array = [];
    this.elements=""
    this.result = " ";
  }
}
