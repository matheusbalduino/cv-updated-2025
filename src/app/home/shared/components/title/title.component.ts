import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageTitle } from '../../interfaces/interface.type';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() TitleText!: string; // Mark TitleText as an input property
  @Input() Alignment!: 'left' | 'center' | 'right' | 'justify';
  @Input() ImageSrc?: ImageTitle; // Default image source
   
}
