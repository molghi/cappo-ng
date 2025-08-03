import { Component } from '@angular/core';

interface SocialLink {
    link: string;
    icon: string;
    title: string;
}

interface FooterColumnList {
    listItemTitle: string;
    listItemLink: string;
}

interface FooterColumnOptionsList {
    icon: string;
    title: string;
}

interface FooterColumn {
    colType: 'site-name' | 'with-list' | 'payment-options'; // restrict to specific string values (union)
    colTitle?: string;
    list?: Array<FooterColumnList>;
    optionsList?: Array<FooterColumnOptionsList>;
    colText?: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    // data to show in the template

    siteName: string = 'Cappo';

    copyrightText: string = '© 2025 Cappo. All rights reserved';

    socialLinks: Array<SocialLink> = [
        { link: 'https://facebook.com', icon: 'assets/images/icons/401-facebook.svg', title: 'facebook' },
        { link: 'https://instagram.com', icon: 'assets/images/icons/403-instagram.svg', title: 'instagram' },
        { link: 'https://youtube.com', icon: 'assets/images/icons/414-youtube.svg', title: 'youtube' },
        { link: 'https://twitter.com', icon: 'assets/images/icons/407-twitter.svg', title: 'twitter' },
        { link: 'https://linkedin.com', icon: 'assets/images/icons/458-linkedin.svg', title: 'linkedin' },
    ];

    columns: Array<FooterColumn> = [
        {
            colType: 'site-name',
        },
        {
            colType: 'with-list',
            colTitle: 'Quick Links',
            list: [
                { listItemTitle: 'Home', listItemLink: '/' },
                { listItemTitle: 'Products', listItemLink: '/' },
                { listItemTitle: 'About', listItemLink: '/' },
                { listItemTitle: 'Features', listItemLink: '/' },
                { listItemTitle: 'Contact', listItemLink: '/' },
            ],
        },
        {
            colType: 'with-list',
            colTitle: 'Resources',
            list: [
                { listItemTitle: 'Download Whitepapper', listItemLink: '/' },
                { listItemTitle: 'Smart Token', listItemLink: '/' },
                { listItemTitle: 'Blockchain Explorer', listItemLink: '/' },
                { listItemTitle: 'Crypto API', listItemLink: '/' },
                { listItemTitle: 'Interest', listItemLink: '/' },
            ],
        },
        {
            colType: 'payment-options',
            colText: 'We accept following payment systems',
            optionsList: [
                { icon: 'assets/images/icons/visa.svg', title: 'Visa' },
                { icon: 'assets/images/icons/mastercard.svg', title: 'Mastercard' },
                { icon: 'assets/images/icons/bitcoin.svg', title: 'Bitcoin' },
            ],
        },
    ];
}
