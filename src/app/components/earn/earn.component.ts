import { Component } from '@angular/core';

@Component({
    selector: 'app-earn',
    templateUrl: './earn.component.html',
    styleUrls: ['./earn.component.css'],
})
export class EarnComponent {
    // data to show in the template

    title: string = 'Check how much you can earn';
    text: string = `Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.`;
    placeholder: string = 'Enter your hash rate';
    selectOptions: Array<string> = ['TH/s', 'BTC', 'DAWGGY'];
    buttonText: string = 'Calculate';
    bottomTitle: string = 'ESTIMATED 24 HOUR REVENUE:';
    bottomText: string = 'Revenue will change based on mining difficulty and Ethereum price.';
}
