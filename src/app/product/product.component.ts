import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.class';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor(public fs: FirebaseService) { 
  }
  

  ngOnInit(): void {
  }

}
