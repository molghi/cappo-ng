import { Component } from '@angular/core';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
    // data to show in the template

    title: string = 'Start mining now';
    text: string = 'Join now with Cappo to get the latest news and start mining now';
    placeholder: string = 'Enter your email';
    buttonText: string = 'Subscribe';
}
