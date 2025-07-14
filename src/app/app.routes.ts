import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule), // Lazy load the HomeComponent
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        resolve: {
            data: () => new Promise( (resolve) =>  setTimeout(() => {
                resolve({
                    title: 'Home',
                    content: 'Welcome to the home page!'
                });
            }, 1)) // Simulating a delay for data resolution)
        }
    }
];
