import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
    selector: 'app-rates',
    templateUrl: './rates.component.html',
    styleUrls: ['./rates.component.css'],
})
export class RatesComponent implements OnInit {
    constructor(private cryptoService: CryptoService) {}

    // rates: null | object = { bitcoin: 0, ethereum: 0, binancecoin: 0 };
    rates: { [key: string]: { usd: number } } = {};

    Object = Object; // expose Object to template

    ngOnInit() {
        this.cryptoService.getPrices().subscribe((data) => {
            this.rates = data;
            console.log(data);
            console.log(Object.entries(this.rates));
        });
    }

    moneyFormatter(value: number): string {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return formatter.format(value);
    }
}
