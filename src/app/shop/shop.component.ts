import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(public helpers: HelpersService) { }

  ngOnInit(): void {
  }

}
