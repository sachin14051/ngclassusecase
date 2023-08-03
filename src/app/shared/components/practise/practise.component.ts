import { Component, OnInit } from '@angular/core';
import { Idata } from 'src/app/module/module';
import { products } from 'src/app/products/products';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss']
})
export class PractiseComponent implements OnInit {

   mobileProducts !: Array<Idata> 
  ngOnInit(): void {
    this.mobileProducts = products
  }
}
