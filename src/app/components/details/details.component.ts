import { Component } from '@angular/core';

interface Item {
    title: string;
    text: string;
    button: {
        link: string;
        text: string;
    };
    image: string;
}

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
    // data to show in the template

    title: string = 'Market sentiments, portfolio, and run the infrastructure of your choice';

    items: Array<Item> = [
        {
            title: 'Invest Smart',
            text: 'Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.',
            button: { link: '/', text: 'Learn More' },
            image: 'assets/images/content/details-1.png',
        },
        {
            title: 'Detailed Statistics',
            text: 'View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.',
            button: { link: '/', text: 'Learn More' },
            image: 'assets/images/content/details-2.png',
        },
        {
            title: 'Grow your profit and track your investments',
            text: 'Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.',
            button: { link: '/', text: 'Learn More' },
            image: 'assets/images/content/details-3.png',
        },
    ];
}
