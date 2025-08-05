import { Component } from '@angular/core';

interface Block {
    title: string;
    fields: Array<{ placeholder: string; type: string }>;
    button: string;
}

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
    // data to show in the template

    triggers: Array<string> = ['Log In', 'Sign Up'];

    content: Array<Block> = [
        {
            title: 'Sign Up Form',
            fields: [
                { placeholder: 'Your Name', type: 'text' },
                { placeholder: 'Your Email', type: 'email' },
                { placeholder: 'Your Password', type: 'password' },
                { placeholder: 'Repeat Password', type: 'password' },
            ],
            button: 'Sign Up',
        },
        {
            title: 'Log In Form',
            fields: [
                { placeholder: 'Your Name or ID', type: 'text' },
                { placeholder: 'Your Password', type: 'password' },
            ],
            button: 'Log In',
        },
    ];
}
