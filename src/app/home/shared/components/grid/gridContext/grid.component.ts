import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GridItem } from '../../../interfaces/interface.type';
import { HomeRoutingModule } from "../../../../home-routing.module";


@Component({
  selector: 'app-grid-context',
  standalone: true,
  imports: [MatCardModule, CommonModule, HomeRoutingModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridContextComponent {
  @Input() items!: GridItem[];
  @Input() Width: number = 500;

  get widthGrid(): string {
    return `repeat(auto-fit, minmax(${this.Width}px, 1fr))`;
  }

}
