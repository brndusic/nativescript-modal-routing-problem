import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ModalDialogService, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { ModalComponent } from './item/modal.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, ModalComponent],
  providers: [ModalDialogService],
  schemas: [NO_ERRORS_SCHEMA],
//   entryComponents: [ModalComponent]
})
export class AppModule {}
