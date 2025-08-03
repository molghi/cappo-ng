import { Component } from '@angular/core';

interface StatItem {
    title: string;
    text: string;
    iconPath: string;
}

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
    // data to show in the template

    items: Array<StatItem> = [
        { title: '$30B', text: 'Digital Currency Exchanged', iconPath: 'assets/images/icons/stat-item.svg' },
        { title: '10M+', text: 'Trusted Wallets Investor', iconPath: 'assets/images/icons/stat-item-2.svg' },
        { title: '195', text: 'Countries Supported', iconPath: 'assets/images/icons/stat-item-3.svg' },
    ];
}
