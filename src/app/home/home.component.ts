import { Component } from '@angular/core';
import { MATERIAL_COMPONENTS } from '../materials/material.imports';
import { TextKey } from './text/home.text.keys';
import { SHARED_COMPONETS } from './shared/shared.components';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageTitle, NavMenuItem } from './shared/interfaces/interface.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL_COMPONENTS,
    ...SHARED_COMPONETS
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  HomeText:string = TextKey['HomeTitle'];
  Items: NavMenuItem[] = [
    { label: 'Home', link: '/home', color: 'var(--primary-color)' },
    { label: 'About Me', link: '/home/about', color: 'var(--primary-color)' },
    { label: 'Experience', link: '/home/experience', color: 'var(--primary-color)' },
    { label: 'Projects', link: '/home/projects', color: 'var(--primary-color)' }
  ];

  imageTile: ImageTitle = {
    src: 'assets/spaceship.png',
    alt: 'Spaceship Image'
  };

}
