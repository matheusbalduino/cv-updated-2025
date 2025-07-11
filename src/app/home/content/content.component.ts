import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridImageComponent } from '../shared/components/grid/gridImage/grid.component';
import { GridImageItem, GridItem } from '../shared/interfaces/interface.type';
import { GridContextComponent } from '../shared/components/grid/gridContext/grid.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, GridImageComponent, GridContextComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  formation: GridItem[] = [
    {
      title: 'Bachelor of Analysis and Systems Development',
      subtitle: 'REGES University, Ribeirão Preto, Brazil',
      content: `Graduated with a focus on software development, algorithms, and data structures.
                Completed projects in web development and software engineering principles.`,
      date: 'JANUARY 2019 - DECEMBER 2022',
    },
  ];
  items: GridImageItem[] = [
    {
      alt: 'Angular Logo',
      imageUrl: 'assets/Angular_full_color_logo.png',
    },
    {
      alt: 'Dotnet Logo',
      imageUrl: 'assets/dotnet.png',
    },
    {
      alt: 'Node.js Logo',
      imageUrl: 'assets/nodejs.png',
    },
    {
      alt: 'Git Logo',
      imageUrl: 'assets/Git-logo.png',
    },
  ];
}
