import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../helpers.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private helpers: HelpersService) { }

  ngOnInit(): void {
  }

  openCart(){
    this.helpers.cartOpen = true;
  }


}
