import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

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

    isVisible: boolean = false;

    constructor(private sharedService: SharedService) {
        this.sharedService.action$.subscribe(() => {
            // Do something when triggered
            this.isVisible = !this.isVisible;
        });
    }

    toggleForm(): void {
        this.isVisible = !this.isVisible;
    }

    switchTabs(): void {
        this.activeTab = this.activeTab === 0 ? 1 : 0;
    }

    activeTab: number = 0;

    triggers: Array<string> = ['Log In', 'Sign Up'];

    content: Array<Block> = [
        {
            title: 'Log In Form',
            fields: [
                { placeholder: 'Your Name or ID', type: 'text' },
                { placeholder: 'Your Password', type: 'password' },
            ],
            button: 'Log In',
        },
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
    ];
}
