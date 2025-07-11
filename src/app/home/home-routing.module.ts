import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'; // Import your HomeComponent
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Rota padrão para o HomeComponent
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./content/content.component').then((m) => m.ContentComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./experience/experience.component').then((m) => m.ExperienceComponent),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./projects/projects.component').then((m) => m.ProjectsComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
