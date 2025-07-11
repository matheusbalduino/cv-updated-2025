import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubRepo } from '../interfaces/gitHub.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com'; 

  constructor(private http: HttpClient) { }

  getRepositoryDetails(owner: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`${this.apiUrl}/users/${owner}/repos?per_page=1000`);  
  }
  
  getRepository(owner: string, repos:string): Observable<GithubRepo> {
    return this.http.get<GithubRepo>(`${this.apiUrl}/repos/${owner}/${repos}`);  
  }

}
