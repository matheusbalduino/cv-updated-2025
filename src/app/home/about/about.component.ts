import { Component } from '@angular/core';
import { GridItem } from '../shared/interfaces/interface.type';
import { GridContextComponent } from '../shared/components/grid/gridContext/grid.component';
import { CommonModule } from '@angular/common';
import { TextKey } from '../text/home.text.keys';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GridContextComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  items: GridItem[] = [
    {
      title: 'Introduction',
      subtitle: `<p></p>`,
      content: TextKey['AboutDescription']
    }] 
}
