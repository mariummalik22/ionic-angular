import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalRouterModule} from './modal-router.module';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ModalComponent} from './modal.component'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ModalComponent],
    imports: [
        CommonModule,
        RouterModule,
        ModalRouterModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule
    ],
    providers: [ModalComponent],
    exports: [ModalComponent],
    entryComponents: [ModalComponent]
})
export class ModalModule {
}