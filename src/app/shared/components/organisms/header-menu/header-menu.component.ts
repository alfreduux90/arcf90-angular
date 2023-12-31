import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAuthedDirective } from '../../../directives/show-authed.directive';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'dp-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit{
  @Input() menuitem: any;

  constructor() {}

  onItemClick() {
  }

  ngOnInit() {
  }

}