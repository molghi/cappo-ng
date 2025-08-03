import { Component } from '@angular/core';

@Component({
    selector: 'app-reason',
    templateUrl: './reason.component.html',
    styleUrls: ['./reason.component.css'],
})
export class ReasonComponent {
    // data to show in the template

    imgPath: string = 'assets/images/content/why.png';
    title: string = 'Why you should choose Cappo';
    text: string = 'Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.';
    buttonText: string = 'Learn More';
    buttonLink: string = '/';
}
