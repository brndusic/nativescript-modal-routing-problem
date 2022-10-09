import { Component } from '@angular/core'
import { ModalDialogParams, RouterExtensions } from '@nativescript/angular'

import { Item } from './item'

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
})
export class ModalComponent {
    item: Item

    constructor(private params: ModalDialogParams) { 
        this.item = params.context.item;
    }

    close() {
        this.params.closeCallback(this.item);
    }
}
