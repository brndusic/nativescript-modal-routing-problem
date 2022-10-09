import { Component, OnInit, ViewContainerRef } from '@angular/core'
import { ModalDialogService, RouterExtensions } from '@nativescript/angular'

import { Item } from './item'
import { ItemService } from './item.service'
import { ModalComponent } from './modal.component'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService, private modalService: ModalDialogService, private vcRef: ViewContainerRef, private router: RouterExtensions) {
    console.log('ItemsComponent.constructor');
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  onItemTap(item: Item){
    this.router.navigate(['/item', item.id]);
  }

  onDoubleTap(item: Item){
    this.modalService.showModal(ModalComponent, {fullscreen: true, viewContainerRef: this.vcRef, context: {item: item}})
    .then((item: Item) => {
        console.log(item);
        // setTimeout(()=>{
            this.router.navigate(['/item', item.id]);
        // }, 100);
    });
  }
}
