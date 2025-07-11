import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GridImageItem, GridItem } from '../../../interfaces/interface.type';


@Component({
  selector: 'app-grid-image',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridImageComponent {
  @Input() ImageCards: GridImageItem [] = [];
}
