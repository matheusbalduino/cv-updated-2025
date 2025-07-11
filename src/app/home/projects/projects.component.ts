import { Component } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { forkJoin, map } from 'rxjs';
import { GithubRepo } from '../../services/interfaces/gitHub.interface';
import { GridContextComponent } from '../shared/components/grid/gridContext/grid.component';
import { GridItem } from '../shared/interfaces/interface.type';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GridContextComponent, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  gitRepositories: GridItem[] = [];

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.getMainRepositories();
  }

  getMainRepositories(): void {
    forkJoin([
      this.gitHubService.getRepositoryDetails('matheusbalduino'),
      // Add other repositories as needed
    ])
      .pipe(
        map(([repos]) => {
          const userRepos = repos
            .filter((repo) => repo.stargazers_count > 0)
            .map((repo) => this.mapToGridItem(repo));

          return userRepos;
        })
      )
      .subscribe({
        next: (combinedRepos: GridItem[]) => {
          this.gitRepositories = combinedRepos;
          console.log('Combined repositories:', this.gitRepositories);
        },
        error: (err) =>
          console.error('Error fetching combined repositories:', err),
      });
  }
  openUrl(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  private mapToGridItem(repo: GithubRepo): GridItem {
    return {
      title:
        repo.name.toLocaleLowerCase().at(0)?.toUpperCase() +
        repo.name.toLocaleLowerCase().slice(1),
      link: repo.html_url,
      content: repo.description ?? '',
      date: new Date(repo.created_at).toLocaleDateString(),
    };
  }
}
