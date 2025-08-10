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
    // placeholder: string = 'Enter your hash rate';
    placeholder: string = 'Enter crypto currency amount';
    selectOptions: Array<string> = ['BTC', 'ETH', 'BNB'];
    buttonText: string = 'Calculate';
    bottomTitle: string = 'ESTIMATED 24 HOUR REVENUE:';
    bottomText: string = 'Revenue will change based on mining difficulty and Ethereum price.';

    rates: Array<any> = [116574, 3719, 768.51]; // btc, eth, bnb

    inputValue: number | string = '';
    selectValue: string = this.selectOptions[0];

    finalAmount: number | string = 0;

    calcIt(): void {
        const currencyIndex: number = this.selectOptions.findIndex((x) => x === this.selectValue);

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        this.finalAmount = formatter.format(+this.inputValue * this.rates[currencyIndex]);
    }

    onChangeSelect(e: Event): void {
        const selectElement = e.target as HTMLSelectElement;
        const selectedValue = selectElement.value;
        this.selectValue = selectedValue;
    }
}
