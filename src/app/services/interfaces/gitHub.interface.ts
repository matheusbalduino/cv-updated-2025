export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  created_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  [key: string]: any;
}