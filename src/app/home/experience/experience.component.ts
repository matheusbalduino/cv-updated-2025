import { Component } from '@angular/core';
import { GridContextComponent } from '../shared/components/grid/gridContext/grid.component';
import { GridItem } from '../shared/interfaces/interface.type';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [GridContextComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  items: GridItem[] = [
    {
      title: `Software Engineer`,
      subtitle: `Freelance, Remote`,
      content: `Freelance web developer focused on building and enhancing websites with
                modern technologies. In charge of designing and delivering features following
                agile best practices. 
                Proficient in automating deployments through CI/CD
                pipelines with GitLab. Well-versed in TypeScript, C#, .NET Core 8, and
                JavaScript.`,
      date: `APRIL 2025 - PRESENT`,
    },
    {
      title: 'Full-Stack Developer',
      subtitle: 'SERPRO, Remote',
      content: `FullStack developer working for the government of Brazil, developing and
                improving websites using Node.js technologies, .Net technologies, Angular and
                PostgreSQL. Responsible for designing and implementing features with Scrum
                methodology. Experienced in deployment automation with CI/CD pipelines
                using GitLab. Skilled in TypeScript, C# and .NET Core 8.`,
      date: `JUNE 2024 - APRIL 2025`,
    },
    {
      title: 'Full-Stack Developer',
      subtitle: 'Laqus, Remote',
      content: `Collaborating on API development and client integration using REST API and
                microservices technologies in a fintech company that issues stocks.
                Participating in the creation of a platform from scratch with Angular
                (microfrontend) and maintaining a website in React for stock issuance.
                Teamwork, Code Review, Gitflow, deploy and scrum methodology.
                Utilizing NestJS and .Net Core.`,
      date: `SEPTEMBER 2022 - JUNE 2024`,
    },
    {
      title: 'Full-Stack NodeJs',
      subtitle: 'TechSavvy, Brazil',
      content: `Worked as back-end developer programming features for an fintech company, 
                responsible for e-commerce gateway, POS and Billets. Integrating systems
                and refact code with the SOLID principles in Rest APIs based on NodeJs
                technologies. Working as a team with gitflow in a young and engaging
                company. NodeJS, Adonis, VueJs, React and Angular.`,
      date: `SEPTEMBER 2022 - JUNE 2024`,
    },
    {
      title: 'Full-Stack Developer',
      subtitle: 'Unimed, Brazil',
      content: `Web system development for Unimed Company. System integration with REST
                APIs, development of Windows services and website development for
                customers and internal tasks. (.net pdf creation, upload and download of files,
                sql searches and responsive websites). C# .Net Core, Angular.`,
      date: `JANUARY 2021 - DECEMBER 2021`,
    },
    {
      title: 'Front-End Developer',
      subtitle: 'Garden, Brazil',
      content: `JavaScript Backend web system development for Wix platform. Knowledge of
                Wix Velo API Development for advanced Wix Websites and REST API Website
                Integration.<br/><br/>`,
      date: `SEPTEMBER 2020 - JANUARY 2021`,
    },
  ];
}
