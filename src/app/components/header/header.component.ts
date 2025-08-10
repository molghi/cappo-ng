import { Component, Renderer2, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

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

    constructor(private sharedService: SharedService, private renderer: Renderer2) {}
    // what it does:
    // assigning an object instance of Angular’s Renderer2 class to a private property called renderer
    // it is the standard Angular way to get framework-provided services like this
    // everything that's in constructor will run upon instantiating this class - it makes renderer available for you to use later in component
    // shortly, you’re storing Angular’s safe DOM helper, which here is an abstract class that must be instantiated, as a private property, so you can call it anywhere in the component - Angular hands it to you when the component is created

    siteName: string = 'Cappo';

    navMenu: Array<headerNavItem> = [
        { type: 'link', link: '#', title: 'products' },
        { type: 'link', link: '#', title: 'features' },
        { type: 'link', link: '#', title: 'about' },
        { type: 'link', link: '#', title: 'contact' },
        { type: 'login-link', link: '#', title: 'login' },
        { type: 'button', link: '#', title: 'register' },
    ];

    clickLink(title: string) {
        if (title.toLowerCase() !== 'register') return;
        this.sharedService.triggerAction();
    }

    isHamburgerOn: boolean = false;

    toggleHamburger() {
        this.isHamburgerOn = !this.isHamburgerOn;
        // this below is acceptable in most small projects; however, 'the Angular way' is to go with Renderer2 (same amount of code)
        //    if (this.isHamburgerOn) document.body.classList.add('lock');
        //    else document.body.classList.remove('lock');
        if (this.isHamburgerOn) this.renderer.addClass(document.body, 'lock');
        else this.renderer.removeClass(document.body, 'lock');
    }

    // Implement sticky header on scroll up
    lastScroll: number = 0;
    isHeaderVisible: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const current = window.scrollY;
        if (current < this.lastScroll) {
            this.isHeaderVisible = true; // scrolling up
        } else {
            this.isHeaderVisible = false; // scrolling down
        }

        if (window.scrollY === 0) {
            this.isHeaderVisible = false;
        }
        this.lastScroll = current;
    }
}
