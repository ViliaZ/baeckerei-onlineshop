import { Component, Input, OnInit } from '@angular/core';
import { Shop } from 'src/models/shop.class';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() currentShop!: Shop;

  constructor() { }

  ngOnInit(): void {
  }

}
