import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
    // data to show in the template

    label: string = '75% Save';
    textAbove: string = 'For the Black Friday weekend';
    title: string = 'Fastest & secure platform to invest in crypto';
    text: string = 'Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.';
    buttonText: string = 'Try for FREE';
    buttonLink: string = '/';
}
