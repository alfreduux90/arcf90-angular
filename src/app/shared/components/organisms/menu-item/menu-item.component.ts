import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dp-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuitem: any;
  
  constructor() { }

  ngOnInit() {
  }

}