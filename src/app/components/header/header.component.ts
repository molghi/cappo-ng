import { Component } from '@angular/core';

interface headerNavItem {
    type: string;
    link: string;
    title: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', './header-hamburger-menu.css'],
})
export class HeaderComponent {
    // data to show in the template

    siteName: string = 'Cappo';

    navMenu: Array<headerNavItem> = [
        { type: 'link', link: '/', title: 'products' },
        { type: 'link', link: '/', title: 'features' },
        { type: 'link', link: '/', title: 'about' },
        { type: 'link', link: '/', title: 'contact' },
        { type: 'login-link', link: '/', title: 'login' },
        { type: 'button', link: '/', title: 'register' },
    ];
}
