import { Component } from '@angular/core';

interface OptionItem {
    iconPath: string;
    title: string;
    abbreviation: string;
    text: string;
    buttonText: string;
    buttonLink: string;
    buttonIcon: string;
}

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css'],
})
export class OptionsComponent {
    // data to show in the template

    title: string = 'Trade securely and market the high-growth cryptocurrencies';

    hoveredOver: number = 0;

    items: Array<OptionItem> = [
        {
            iconPath: 'assets/images/icons/btc.svg',
            title: 'Bitcoin',
            abbreviation: 'BTC',
            text: 'Digital currency in which a record of transactions is maintained.',
            buttonText: 'Start mining',
            buttonLink: '#',
            buttonIcon: 'assets/images/icons/arrow-right.svg',
        },
        {
            iconPath: 'assets/images/icons/eth.svg',
            title: 'Ethereum',
            abbreviation: 'ETH',
            text: 'Blockchain technology to create and run decentralized digital applications.',
            buttonText: 'Start mining',
            buttonLink: '#',
            buttonIcon: 'assets/images/icons/arrow-right.svg',
        },
        {
            iconPath: 'assets/images/icons/lite.svg',
            title: 'Litecoin',
            abbreviation: 'LTC',
            text: 'Cryptocurrency that enables instant payments to anyone in the world.',
            buttonText: 'Start mining',
            buttonLink: '#',
            buttonIcon: 'assets/images/icons/arrow-right.svg',
        },
    ];

    changeHoveredOver(index: number) {
        this.hoveredOver = index;
    }
}
