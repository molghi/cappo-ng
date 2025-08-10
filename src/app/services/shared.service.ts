import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
    private actionSource = new Subject<void>();
    action$ = this.actionSource.asObservable();

    triggerAction() {
        this.actionSource.next();
    }
}
