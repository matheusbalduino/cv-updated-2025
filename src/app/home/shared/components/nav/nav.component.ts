import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavMenuItem } from '../../interfaces/interface.type';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {  
  @Input() MenuItems!: NavMenuItem [];
  @Input() MarginTop = 0;

  get top(): string {
    return `${this.MarginTop}vh`;
  }
}
