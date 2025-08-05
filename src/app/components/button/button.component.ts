import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
    @Input() text?: string = 'Learn more'; // optional
    @Input() type?: string = 'button'; // optional
    @Input() additionalClass?: string = ''; // optional
    @Input() bgColor?: string = '#3671e9'; // optional
    @Input() color?: string = '#FFF'; // optional
    @Input() href?: string = ''; // optional
    @Input() typeSubmit?: boolean = false; // optional
}
