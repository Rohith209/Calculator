import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-calci',
  template: `
<div class="row">
    <div class="col-6">
      <input type="number" [(ngModel)]="num1" placeholder="Enter Number 1" class="form-control">
    </div>
    <div class = "col-6">
      <input type="number" [(ngModel)]="num2" placeholder="Enter Number 2" class="form-control">
    </div>
</div>
<div class="d-flex">
  <button type="button" class="btn btn-primary" (click) = "add()">Addition</button><br>
  <button type="button" class="btn btn-secondary" (click) = "sub()">Subtraction</button><br>
  <button type="button" class="btn btn-success" (click) = "mul()">Multiplication</button><br>
  <button type="button" class="btn btn-danger" (click) = "div()">Division</button>
 </div>
 <div>
 <h2> Result : {{result}} </h2>
 </div>
  `,
  styles: [
   
    
  ]
})
export class CalciComponent {

  num1:number;
  num2:number;
  result:number;
  add(){
    this.result=this.num1+this.num2;
  }
  sub(){
    this.result=this.num1-this.num2;
  }
  mul(){
    this.result=this.num1*this.num2;
  }
  div(){
    this.result=this.num1/this.num2;
  }

}
