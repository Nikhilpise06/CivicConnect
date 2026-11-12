import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({

    selector: 'app-root',

    standalone: true,

    imports: [RouterLink, RouterOutlet],

    template: `

        <nav>

            <h2>⚖️ CivicConnect</h2>

            <a routerLink="/">Home</a>

            <a routerLink="/register">Register</a>

            <a routerLink="/login">Login</a>

        </nav>

        <router-outlet></router-outlet>

    `
})

export class App {

}